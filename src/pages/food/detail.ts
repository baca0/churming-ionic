import {Component, Inject} from "@angular/core";
import {Http} from "@angular/http";
import {NavParams, NavController, Platform} from "ionic-angular";
import "rxjs/add/operator/map";
import "rxjs/add/operator/toPromise";
import "rxjs/Rx";
import {AdMob} from "@ionic-native/admob";
import {GlobalVariable} from "../../providers/global.variable";

@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html'
})
export class DetailPage {
  private selectedFood: any;
  private admobId: string;

  constructor(private http: Http, private params: NavParams, private navCtrl: NavController, @Inject('ApiEndpoint') private apiEndpoint: string, private admob: AdMob, private platform: Platform, private globalVariable: GlobalVariable) {
    this.selectedFood = params.get("selectedFood");

    // Admob
    if (/(android)/i.test(navigator.userAgent)) { // for Android
      this.admobId = 'ca-app-pub-9922758676771561/7145846537';
    } else if (/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {// for iOS
      this.admobId = 'ca-app-pub-9922758676771561/4076458935';
    } else { // for Windows Phone
      this.admobId = 'ca-app-pub-9922758676771561/7145846537';
    }

    this.createBanner();
  }

  ngOnDestroy() {
    this.hideBanner();
  }

  createBanner() {
    this.platform.ready().then(() => {
      if (this.admobId) {
        this.admob.createBanner({
          adId: this.admobId,
          //isTesting: false, //comment this out before publishing the app
          autoShow: true
        });
      }
    });
  }

  hideBanner() {
    this.platform.ready().then(() => {
      if (this.admobId) {
        this.admob.hideBanner();
      }
    });
  }
}
