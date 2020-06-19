import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { UserPeopleComponent } from './components/user-people/user-people.component';
import { UserPostsComponent } from './components/user-posts/user-posts.component';
import {SharedModule} from "../../shared/shared.module";
import { MinimalComponent } from 'src/shared/card-views/minimal/minimal.component';

@NgModule({
  declarations: [ProfileComponent, UserPostsComponent, UserPeopleComponent],
  entryComponents: [],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: ProfileComponent,
      }, 
    ]),
  ],
})
export class ProfileModule { }
