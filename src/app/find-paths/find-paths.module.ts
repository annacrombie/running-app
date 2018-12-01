import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FindPathsRoutingModule } from './find-paths-routing.module';
import { PathListingComponent } from './path-listing/path-listing.component';
import { PathSearchComponent } from './path-search/path-search.component';
import { PathDetailComponent } from './path-detail/path-detail.component';

@NgModule({
  declarations: [PathListingComponent, PathSearchComponent, PathDetailComponent],
  imports: [
    CommonModule,
    FindPathsRoutingModule
  ]
})
export class FindPathsModule { }
