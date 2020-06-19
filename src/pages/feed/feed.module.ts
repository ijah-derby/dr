import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {CardViewsModule} from '../../shared/card-views/card-views.module';
import {SharedModule} from '../../shared/shared.module';
import { FeedAddComponent } from './components/feed-add/feed-add.component';
import { FeedComponent } from './components/feed/feed.component';
import { ProgressBarComponent } from 'src/app/pages/feed/progress-bar/progress-bar.component';

@NgModule({
  declarations: [FeedComponent, FeedAddComponent, ProgressBarComponent],
  entryComponents: [FeedAddComponent, ProgressBarComponent],
  imports: [
    CommonModule,
    SharedModule,
    CardViewsModule,
    RouterModule.forChild([
        { path: '', component: FeedComponent }
    ]),
  ],
})
export class FeedModule {}
