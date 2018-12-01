import { LocationTracker } from "./LocationTracker";


jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000


describe("Location Tracker Test", () => {

    it("Should not explode", () => {
        console.log('logged from a test')
        expect(true).toBeTruthy()
    })

    it("Should fetch the user's location", (done) => {
        let tracker = LocationTracker()
        tracker.watchPosition()
            .subscribe(position => {
                console.log('position received', position)
            })
    })

})
