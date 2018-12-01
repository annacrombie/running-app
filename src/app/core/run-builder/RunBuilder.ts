import { Observable, BehaviorSubject } from "rxjs";
import { IPoint } from "../location-tracker/LocationTracker";
import { IEvent } from "../IEvent";


export interface IRunBuilderState {
    route_name: string
    current_position: IPoint
    path: IPoint[]
    start_position: IPoint
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
    switch(event.key) {
        case 'runner-location-updated':
            state.current_position = event.data
            return state
        case 'run-started':
            state.start_position = event.data
            state.path.push(event.data)
            return state
        default:
            return state
    }
}