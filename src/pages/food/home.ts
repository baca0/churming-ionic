import {Component, Inject} from "@angular/core";
import {Http} from "@angular/http";
import {NavParams, NavController} from "ionic-angular";
import "rxjs/add/operator/map";
import "rxjs/add/operator/toPromise";
import "rxjs/Rx";
import {DetailPage} from "./detail";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private foods: any;
  private category: any;

  constructor(private http: Http, private params: NavParams, private navCtrl: NavController, @Inject('ApiEndpoint') private apiEndpoint: string) {
    this.category = params.get("category");
    this.findFoodByCategory(this.category);
  }

  findFoodByCategory(category) {
    return this.http.get(`${this.apiEndpoint}/categories/${category._id}/foods`).map(res => res.json()).subscribe(data => {
      this.foods = data;
    });
  }

  selectFood(food) {
    this.navCtrl.push(DetailPage, {
      selectedFood: food
    });
  }
}
