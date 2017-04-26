import {Component, Inject} from "@angular/core";
import {Http} from "@angular/http";
import {NavParams, NavController} from "ionic-angular";
import "rxjs/add/operator/map";
import "rxjs/add/operator/toPromise";
import "rxjs/Rx";

@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html'
})
export class DetailPage {
  private selectedFood: any;

  constructor(private http: Http, private params: NavParams, private navCtrl: NavController, @Inject('ApiEndpoint') private apiEndpoint: string) {
    console.log(apiEndpoint);
    this.selectedFood = params.get("selectedFood");
  }

  replaceLineBreak(s:string) {
    return s && s.replace(/,/gi,'<br />');
  }

}
