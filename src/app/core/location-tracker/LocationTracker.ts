import { Observable } from "rxjs";



export interface ILocationTracker {
    streamLocation: (pid: string) => Observable<Position>
    stopStreaming: (pid: string) => void
    currentLocation: () => Promise<Position>
}


export const LocationTracker = (): ILocationTracker => {

    let streamLocation = (pid: string) => {
        return new Observable<Position>((subject) => {
            let pid: number

            if('geolocation' in navigator) {
                pid = navigator.geolocation.watchPosition(
                    position => subject.next(position as Position),
                    error => subject.error(error as any)
                )
            } else {
                subject.error('Geolocation not available')
            }
        })
    }

    return {
        streamLocation,
        stopStreaming: (pid) => {},
        currentLocation: () => new Promise((res, rej) => {
            if('geolocation' in navigator) {
                navigator.geolocation.getCurrentPosition(res, rej)
            } else {
                rej('Geolocation not available')
            }
        })
    }

}