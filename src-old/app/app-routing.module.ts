import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {AuthGuard} from '../pages/auth/guards/auth/auth.guard';
import {WelcomeGuard} from '../pages/welcome/guards/welcome.guard';

/**
 * base route forRoot of application.
 * The app defaults to welcome page when it is opened but there is a guard to check if user is login in.
 * if user us logged in, we redirect to dashboard page.
 * Auth guard will redirect user to authentication pages if user is logged out, or allow access to a page is user is logged in
 * The app uses lazy loading to load modules
 * but { preloadingStrategy: PreloadAllModules } is used to make sure all modules are preloaded to begin with for performance reasons
 */
const routes: Routes = [
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },
  {
    canActivate: [WelcomeGuard],
    path: 'welcome',
    loadChildren: () => import('../pages/welcome/welcome.module').then((m) => m.WelcomeModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('../pages/auth/auth.module').then((m) => m.AuthModule)
  },

  {
    canActivate: [AuthGuard],
    path: 'feed',
    loadChildren: () => import('../pages/feed/feed.module').then((m) => m.FeedModule)
  },

  {
    canActivate: [AuthGuard],
    path: 'dashboard',
    loadChildren: () => import('../pages/dashboard/dashboard.module').then((m) => m.DashboardModule)
  },
  {
    canActivate: [AuthGuard],
    path: 'people',
    loadChildren: () => import('../pages/people/people.module').then((m) => m.PeopleModule)
  },

  {
    canActivate: [AuthGuard],
    path: 'profile',
    loadChildren: () => import('../pages/profile/profile.module').then((m) => m.ProfileModule)
  },
  {
    canActivate: [AuthGuard],
    path: 'messages',
    loadChildren: () => import('../pages/messages/messages.module').then((m) => m.MessagesModule)
  },
  {
    canActivate: [AuthGuard],
    path: 'setting',
    loadChildren: () => import('../pages/setting/setting.module').then((m) => m.SettingModule)
  },
  {
    canActivate: [AuthGuard],
    path: 'notifications',
    loadChildren: () => import('./notifications/notifications.module').then((m) => m.NotificationsPageModule)
  },
  { path: 'music', loadChildren: './music/music.module#MusicPageModule' },
  { path: 'beats', loadChildren: './beats/beats.module#BeatsPageModule' },

   // Shopping App Routes
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('../pages/Shopping/home/home.module').then((m) => m.HomePageModule) },
  
  { path: 'list', loadChildren: () => import('../pages/Shopping/list/list.module').then((m) => m.ListPageModule) },
  // { path: 'list/:cat', loadChildren: './list/list.module#ListPageModule' },

  { path: 'about', loadChildren: () => import('../pages/Shopping/about/about.module').then((m) => m.AboutPageModule) },
  { path: 'blog', loadChildren: () => import('../pages/Shopping/blog/blog.module').then((m) => m.BlogPageModule) },
  
  { path: 'checkout', loadChildren: () => import('../pages/Shopping/checkout/checkout.module').then((m) => m.CheckoutPageModule) },
  // { path: 'checkout/:pay', loadChildren: './checkout/checkout.module#CheckoutPageModule' },

  { path: 'detail', loadChildren: () => import('../pages/Shopping/detail/detail.module').then((m) => m.DetailPageModule) },
  // { path: 'detail/:obj', loadChildren: './detail/detail.module#DetailPageModule' },

  { path: 'favorites', loadChildren: () => import('../pages/Shopping/favorites/favorites.module').then((m) => m.FavoritesPageModule) },
  { path: 'forgot', loadChildren: () => import('../pages/Shopping/forgot/forgot.module').then((m) => m.ForgotPageModule) },
  { path: 'login', loadChildren: () => import('../pages/Shopping/login/login.module').then((m) => m.LoginPageModule)},
  
  { path: 'mycart', loadChildren: () => import('../pages/Shopping/mycart/mycart.module').then((m) => m.MycartPageModule) },

  { path: 'myorder', loadChildren: () => import('../pages/Shopping/myorder/myorder.module').then((m) => m.MyorderPageModule) },
  { path: 'offer', loadChildren: () => import('../pages/Shopping/offer/offer.module').then((m) => m.OfferPageModule) },
  
  { path: 'post', loadChildren: () => import('../pages/Shopping/post/post.module').then((m) => m.PostPageModule) },
  // { path: 'post/:obj', loadChildren: './post/post.module#PostPageModule' },

  { path: 'profile', loadChildren: () => import('../pages/Shopping/profile/profile.module').then((m) => m.ProfilePageModule) },

  { path: 'search', loadChildren: () => import('../pages/Shopping/search/search.module').then((m) => m.SearchPageModule)},

  { path: 'setting', loadChildren: () => import('../pages/Shopping/setting/setting.module').then((m) => m.SettingPageModule) },
  { path: 'shop', loadChildren: () => import('../pages/Shopping/shop/shop.module').then((m) => m.ShopPageModule)},
  { path: 'signup', loadChildren: () => import('../pages/Shopping/signup/signup.module').then((m) => m.SignupPageModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
