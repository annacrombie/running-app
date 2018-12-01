import {LocationTracker} from './LocationTracker'

let tracker = LocationTracker()

tracker.watchPosition()
    .subscribe(position => {
        console.log('position received', position)
    })