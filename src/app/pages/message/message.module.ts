import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MessagePage } from './message.page';
import { SharedModule } from 'src/shared/shared.module';
import { ImageModalComponent } from 'src/app/components/image-modal/image-modal.component';

const routes: Routes = [
  {
    path: '',
    component: MessagePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MessagePage],
  entryComponents: [],
  providers: [
    
  ]
})
export class MessagePageModule {}
