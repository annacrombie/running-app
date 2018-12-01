import { Observable, Subject } from "rxjs";


export interface IPoint {
    lat: number
    lng: number
}


export interface ILocationTracker {
    streamLocation: (pid: string) => Observable<IPoint>
    stopStreaming: (pid: string) => void
    currentLocation: () => Promise<IPoint>
}


export const LocationTracker = () => {

    let watchPosition = () => {
        return new Observable((subject) => {
            let pid: number

            if('geolocation' in navigator) {
                pid = navigator.geolocation.watchPosition(
                    position => subject.next(position),
                    error => subject.error(error)
                )
            } else {
                subject.error('Geolocation not available')
            }
        })
    }

    return {
        watchPosition
    }

}