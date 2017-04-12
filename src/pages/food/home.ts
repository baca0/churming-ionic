import {Component} from "@angular/core";
import {Http} from "@angular/http";
import {NavParams, NavController} from "ionic-angular";
import "rxjs/add/operator/map";
import "rxjs/add/operator/toPromise";
import "rxjs/Rx";
import {FoodiPage} from "../foodi/foodi";
import {DetailPage} from "./detail";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private foods: any;
  //private selectedFood: any;

  constructor(private http: Http, private params: NavParams, private navCtrl: NavController) {
    this.findFoodByCategory(params.get("category"));
  }

  findFoodByCategory(category) {
    return this.http.get('http://localhost:8000/categories/' + category._id + '/foods').map(res => res.json()).subscribe(data => {
      this.foods = data;
    });
  }

  selectFood(food) {
    this.navCtrl.push(DetailPage, {
      selectedFood: food
    });
  }
}
