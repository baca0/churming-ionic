import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {AboutPage, NoticePage} from "./about";

@Component({
  selector: 'page-more',
  template: `
<ion-header>
  <!--<ion-navbar>-->
    <!--<ion-title>LOGO</ion-title>-->
    <!--<ion-buttons end>-->
      <!--<button ion-button icon-only color="royal">-->
        <!--<ion-icon name="menu"></ion-icon>-->
      <!--</button>-->
    <!--</ion-buttons>-->
  <!--</ion-navbar>-->
  <ion-navbar>
      <ion-title>LOGO</ion-title>
    </ion-navbar>
</ion-header>

<ion-content>
<ion-list>
  <button ion-item *ngFor="let menu of moreMenus" (click)="selectMenu(menu)">
    {{ menu }}
  </button>
</ion-list>
</ion-content>

`
})
export class MorePage {
  moreMenus: any;

  constructor(private navCtrl: NavController) {
    this.moreMenus = ['Notice', 'About'];
  }

  selectMenu(menu: string) {
    if (menu == 'Notice') {
      this.navCtrl.push(NoticePage);
    } else if (menu == "About") {
      this.navCtrl.push(AboutPage);
    }

  }
}
