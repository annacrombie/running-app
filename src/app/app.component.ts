import { Component } from '@angular/core';
import { RunBuilder } from './core/run-builder/RunBuilder';
import { LocationTracker } from './core/location-tracker/LocationTracker';

@Component({
  selector: 'rapp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rapp';

  constructor() {
    let runBuilder = RunBuilder(LocationTracker())

    runBuilder.events$.subscribe(e => console.log(`Event: ${JSON.stringify(e)}`))
    runBuilder.state$.subscribe(console.log)

    runBuilder.controller.startRun()

    setTimeout(() => runBuilder.controller.stopRun(), 30 * 1000)
  }
}
