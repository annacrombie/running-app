import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RunManagementRoutingModule } from './run-management-routing.module';
import { RunTrackingComponent } from './run-tracking/run-tracking.component';
import { RunCompletedComponent } from './run-completed/run-completed.component';

@NgModule({
  declarations: [RunTrackingComponent, RunCompletedComponent],
  imports: [
    CommonModule,
    RunManagementRoutingModule
  ]
})
export class RunManagementModule { }
