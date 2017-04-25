import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { ChurmingApp } from './app.component';
import { AboutPage, NoticePage } from '../pages/more/about';
import { NationPage } from '../pages/nation/nation';
import { HomePage } from '../pages/food/home';
import { TabsPage } from '../pages/tabs/tabs';
import { MorePage } from '../pages/more/more';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {SearchPage} from "../pages/search/search";
import {CategoryPage} from "../pages/category/category";
import {DetailPage} from "../pages/food/detail";

@NgModule({
  declarations: [
    ChurmingApp,
    AboutPage,
    NationPage,
    HomePage,
    MorePage,
    NoticePage,
    SearchPage,
    CategoryPage,
    DetailPage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(ChurmingApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    ChurmingApp,
    AboutPage,
    NationPage,
    HomePage,
    MorePage,
    NoticePage,
    SearchPage,
    CategoryPage,
    DetailPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    {provide: 'ApiEndpoint', useValue: 'http://localhost:8000'}
  ]
})
export class AppModule {}
