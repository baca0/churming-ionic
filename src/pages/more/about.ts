import {Component} from "@angular/core";
import {NavController} from "ionic-angular";

@Component({
  selector: 'page-about',
  template: `
<ion-header>
  <ion-navbar>
    <ion-title>
      About
    </ion-title>
  </ion-navbar>
</ion-header>

<ion-content padding>
  This "Solate" application is for my foreign friends.<br>
  And I thought it would help other foreigners.<br>
  If you have question or request, Please let me know <a href="foodi.hailey@gmail.com">foodi.hailey@gmail.com</a><br/>
  And If you needed to introduce about your traditional food, Please Please contact me!
</ion-content>
`
})
export class AboutPage {
  constructor(public navCtrl: NavController) {

  }
}

@Component({
  selector:'page-notice',
  template: `
<ion-header>
  <ion-navbar>
    <ion-title>
      Notice
    </ion-title>
  </ion-navbar>
</ion-header>

<ion-content padding>
  So!ate 어플리케이션은 "한식재단"의 데이터와 구글 이미지 검색을 통해 수집된 이미지로 구성되었습니다.
</ion-content>
`
})
export class NoticePage {
  constructor(public navCtrl: NavController) {

  }
}

