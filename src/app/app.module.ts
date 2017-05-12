import {NgModule, ErrorHandler} from "@angular/core";
import {IonicApp, IonicModule, IonicErrorHandler} from "ionic-angular";
import {SoiateApp} from "./app.component";
// page
import {AboutPage, NoticePage} from "../pages/more/about";
import {NationPage} from "../pages/nation/nation";
import {HomePage} from "../pages/food/home";
import {TabsPage} from "../pages/tabs/tabs";
import {MorePage} from "../pages/more/more";
import {UploadPage} from "../pages/upload/upload";
import {StatusBar} from "@ionic-native/status-bar";
import {SplashScreen} from "@ionic-native/splash-screen";
import {SearchPage} from "../pages/search/search";
import {CategoryPage} from "../pages/category/category";
import {DetailPage} from "../pages/food/detail";
// ad
import {AdMob} from "@ionic-native/admob";
// upload
import {File} from "@ionic-native/file";
import {Transfer} from "@ionic-native/transfer";
import {FilePath} from "@ionic-native/file-path";
import {Camera} from "@ionic-native/camera";
import {GlobalVariable} from "../providers/global.variable";


@NgModule({
  declarations: [
    SoiateApp,
    AboutPage,
    NationPage,
    HomePage,
    MorePage,
    NoticePage,
    SearchPage,
    CategoryPage,
    DetailPage,
    UploadPage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(SoiateApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    SoiateApp,
    AboutPage,
    NationPage,
    HomePage,
    MorePage,
    NoticePage,
    SearchPage,
    CategoryPage,
    DetailPage,
    UploadPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AdMob,
    File,
    Transfer,
    Camera,
    FilePath,
    GlobalVariable,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    {provide: 'ApiEndpoint', useValue: 'http://localhost:8000'}
    //{provide: 'ApiEndpoint', useValue: 'http://54.166.82.223:8000'}
  ]
})
export class AppModule {
}
