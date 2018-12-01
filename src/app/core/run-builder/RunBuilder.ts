import { Observable, BehaviorSubject, Subject } from "rxjs";
import { ILocationTracker } from "../location-tracker/LocationTracker";
import { IEvent } from "../IEvent";

import { scan } from 'rxjs/operators'


export interface IRunBuilderState {
    route_name: string
    current_position: Position
    start_position: Position
    end_position: Position
    path: Position[]
}

export interface IRunBuilder {
    state$: BehaviorSubject<IRunBuilderState>
    events$: Observable<{ key, data }>
    controller: {
        startRun: () => {}
        stopRun: () => {}
    }
}


const reducer = (state: IRunBuilderState, event: IEvent) => {
    switch (event.key) {
        case 'run-started':
            state.start_position = event.data
            state.current_position = event.data
            state.path.push(event.data)
            return state
        case 'run-stopped':
            state.path.push(event.data)
            state.end_position = event.data
            return state
        case 'run-position':
            state.current_position = event.data
            state.path.push(event.data)
            return state
        default:
            return state
    }
}


const initialState: IRunBuilderState = {
    route_name: 'Some Run',
    current_position: null,
    start_position: null,
    end_position: null,
    path: []
}

export const RunBuilder = (tracker: ILocationTracker) => {

    let events$ = new Subject()
    let state$: Observable<IRunBuilderState> = events$.pipe(scan(reducer, initialState))

    let startRun = () => {
        tracker.currentLocation()
            .then(position => {
                events$.next({
                    key: 'run-started',
                    data: position
                })
            })

        tracker.streamLocation('running').subscribe(position => {
            events$.next({
                key: 'run-position',
                data: position
            })
        })
    }

    let stopRun = () => {
        tracker.currentLocation()
            .then(position => {
                events$.next({
                    key: 'run-stopped',
                    data: position
                })
            })
    }

    return {
        state$,
        events$,
        controller: {
            startRun,
            stopRun
        }
    }

}