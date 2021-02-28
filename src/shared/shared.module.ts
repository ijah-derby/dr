import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ShareModule as SocialShareModule } from '@ngx-share/core';
import { TranslateModule } from '@ngx-translate/core';
import { MomentModule } from 'angular2-moment';
import { AutosizeModule } from 'ngx-autosize';
import {FeedCommentComponent} from '../pages/feed/components/feed-comment/feed-comment.component';
import {FeedDetailComponent} from '../pages/feed/components/feed-detail/feed-detail.component';
import { AccordionModule } from './components/accordion/accordion.module';
import { NoDataComponent } from './components/no-data/no-data.component';
import { RatingComponent } from './components/rating/rating.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SimpleItemComponent } from './components/simple-item/simple-item.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { TabMenuComponent } from './components/tab-menu/tab-menu.component';
import { ColorLuminanceDirective } from './directives/color-luminance/color-luminance.directive';
import { ElasticDirective } from './directives/elastic/elastic.directive';
import { ImageLoaderDirective } from './directives/image-loader/image-loader';
import { FormFieldModule } from './form-field/form-field.module';
import { CalendarEventListComponent } from './modals/calendar-event-list/calendar-event-list.component';
import { CalendarEventManageComponent } from './modals/calendar-event-manage/calendar-event-manage.component';
import { ChangePasswordComponent } from './modals/change-password/change-password.component';
import { EditProfileComponent } from './modals/edit-profile/edit-profile.component';
import { FeedbackComponent } from './modals/feedback/feedback.component';
import { GalleryPickerComponent } from './modals/gallery-picker/gallery-picker.component';
import {ImagePreviewPage} from './modals/image-modal/imagemodal.page';
import { ImagePreviewComponent } from './modals/image-preview/image-preview.component';
import { LangSelectComponent } from './modals/lang-select/lang-select.component';
import { MapFilterComponent } from './modals/map-filter/map-filter.component';
import { NotificationSettingsComponent } from './modals/notification-settings/notification-settings.component';
import { PrivacyComponent } from './modals/privacy/privacy.component';
import { ReviewComponent } from './modals/review/review.component';
import { SocialShareComponent } from './modals/social-share/social-share.component';
import { TermsAndConditionsComponent } from './modals/terms-and-conditions/terms-and-conditions.component';
import { MarkdownPipe } from './pipes/markdown/markdown.pipe';
import {YoutubePipe} from './pipes/youtube/youtube.pipe';
import {PersonComponent} from "../pages/people/components/person/person.component";
import { FeedReplyComponent } from 'src/pages/feed/components/feed-reply/feed-reply.component';
import { MinimalComponent } from './card-views/minimal/minimal.component';
import { FeedAddComponent } from 'src/pages/feed/components/feed-add/feed-add.component';
import { ConversationPipe } from 'src/app/pipes/conversation.pipe';
import { DateFormatPipe } from 'src/app/pipes/date.pipe';
import { FriendPipe } from 'src/app/pipes/friend.pipe';
import { GroupPipe } from 'src/app/pipes/group.pipe';
import { ImageModalComponent } from 'src/app/components/image-modal/image-modal.component';

const COMPONENTS: any[] = [MinimalComponent,TabMenuComponent, NoDataComponent, SearchBarComponent, SpinnerComponent, SimpleItemComponent, RatingComponent];

const MODALS: any[] = [
  GalleryPickerComponent,
  ChangePasswordComponent,
  CalendarEventListComponent,
  CalendarEventManageComponent,
  ImagePreviewComponent,
  ReviewComponent,
  LangSelectComponent,
  NotificationSettingsComponent,
  EditProfileComponent,
  FeedbackComponent,
  PrivacyComponent,
  TermsAndConditionsComponent,
  MapFilterComponent,
  SocialShareComponent,
  ImagePreviewPage,
  FeedDetailComponent,
  FeedCommentComponent,
  FeedReplyComponent,
  PersonComponent,
  FeedAddComponent,
  ImageModalComponent
];

const DIRECTIVES: any[] = [ImageLoaderDirective, ElasticDirective, ColorLuminanceDirective];

const PIPES: any[] = [MarkdownPipe, YoutubePipe, ConversationPipe, DateFormatPipe, FriendPipe, GroupPipe];

const MODULES = [
  CommonModule,
  IonicModule,
  TranslateModule,
  FormFieldModule,
  MomentModule,
  AccordionModule,
  AutosizeModule,
  SocialShareModule
];

@NgModule({
  declarations: [COMPONENTS, DIRECTIVES, PIPES, MODALS],
  entryComponents: [MODALS],
  exports: [MODULES, COMPONENTS, DIRECTIVES, PIPES, MODALS],
  imports: [MODULES]
})
export class SharedModule {}
