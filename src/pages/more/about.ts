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
  This "Churming" application is for you.<br>
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
  notice
</ion-content>
`
})
export class NoticePage {
  constructor(public navCtrl: NavController) {

  }
}

