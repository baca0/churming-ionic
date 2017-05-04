import {Component, Inject} from "@angular/core";
import {Http} from "@angular/http";
import {NavParams, NavController} from "ionic-angular";
import "rxjs/add/operator/map";
import "rxjs/add/operator/toPromise";
import "rxjs/Rx";
import {AdMob} from "@ionic-native/admob";

@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html'
})
export class DetailPage {
  private selectedFood: any;

  constructor(private http: Http, private params: NavParams, private navCtrl: NavController, @Inject('ApiEndpoint') private apiEndpoint: string, private admob: AdMob) {
    console.log(apiEndpoint);
    this.selectedFood = params.get("selectedFood");

    // Admob
   var admobId: string;
    if (/(android)/i.test(navigator.userAgent)) { // for Android
      admobId = 'ca-app-pub-9922758676771561/8286332533';
    } else if (/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {// for iOS
      admobId = 'ca-app-pub-9922758676771561/4076458935';
    } else { // for Windows Phone
      admobId = 'ca-app-pub-9922758676771561/8286332533';
    }

    if (admobId) {
      this.admob.createBanner({
        adId: admobId,
        //isTesting: false, //comment this out before publishing the app
        autoShow: true
      });
    }
  }

  replaceLineBreak(s: string) {
    return s && s.replace(/,/gi, '<br />');
  }

}
