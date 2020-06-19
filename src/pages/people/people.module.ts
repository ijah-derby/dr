import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {IonicModule} from '@ionic/angular';
import {SharedModule} from '../../shared/shared.module';
import { PeopleComponent } from './components/people/people.component';
import {PersonComponent} from './components/person/person.component';

@NgModule({
  declarations: [PeopleComponent],
  imports: [
    CommonModule,
    SharedModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: PeopleComponent,
      },
      {
        path: ':id',
        component: PersonComponent,
      },
    ]),
  ]
})
export class PeopleModule {}
