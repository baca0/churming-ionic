import {Component} from "@angular/core";
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

  constructor(private http: Http, private params: NavParams, private navCtrl: NavController) {
    this.selectedFood = params.get("selectedFood");
  }
}
