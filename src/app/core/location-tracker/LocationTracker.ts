import { Observable } from "rxjs";


export interface IPoint {
    lat: number
    lng: number
}


export interface ILocationTracker {
    streamLocation: (pid: string) => Observable<IPoint>
    stopStreaming: (pid: string) => void
    currentLocation: () => Promise<IPoint>
}

