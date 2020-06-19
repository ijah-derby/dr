import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from 'src/shared/shared.module';

import { IonicModule } from '@ionic/angular';

import { NotificationsPage } from './notifications.page';
import { FeedDetailComponent } from 'src/pages/feed/components/feed-detail/feed-detail.component';
import { FeedCommentComponent } from 'src/pages/feed/components/feed-comment/feed-comment.component';
import { PersonComponent } from 'src/pages/people/components/person/person.component';

const routes: Routes = [
  {
    path: '',
    component: NotificationsPage
  }
];

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NotificationsPage],
  entryComponents: []
})
export class NotificationsPageModule {}
