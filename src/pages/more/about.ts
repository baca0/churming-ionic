import {Component} from "@angular/core";
import {NavController, Platform} from "ionic-angular";

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
  This "so!ate" application is for my foreign friends.<br>
  And I thought it would help other foreigners.<br>
  If you have question or request, Please let me know <a href="mailto:soiate.hailey@gmail.com">soiate.hailey@gmail.com</a><br/>
  And If you needed to introduce about your traditional food, Please Please contact me!
</ion-content>
`
})
export class AboutPage {
  constructor(public navCtrl: NavController, private platform: Platform) {

  }
  //
  // mailto() {
  //   this.platform.ready().then(() => {
  //     window.open('mailto:soiate.hailey@gmail.com');
  //   })
  // }
}

@Component({
  selector: 'page-notice',
  template: `
<ion-header>
  <ion-navbar>
    <ion-title>
     Notice
    </ion-title>
  </ion-navbar>
</ion-header>

<ion-content padding>
  The "so!ate" application consists of the data from the "Korean Food Foundation"(한식재단) and the images collected through Google retrieval and Instagram.<br/>
  Thank you! @woo_gyoik, @chachaming0413
</ion-content>
`
})
export class NoticePage {
  constructor(public navCtrl: NavController) {

  }
}

