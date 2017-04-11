import {Component} from "@angular/core";
import {Http} from "@angular/http";
import {NavParams} from "ionic-angular";
import "rxjs/add/operator/map";
import "rxjs/add/operator/toPromise";
import "rxjs/Rx";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private foods: any;
  private selectedFood: any;

  constructor(private http: Http, private params: NavParams) {
    this.findFoodByCategory(params.get("category"));

    this.selectedFood = null;
  }

  findFoodByCategory(category) {
    return this.http.get('http://localhost:8000/categories/' + category._id + '/foods').map(res => res.json()).subscribe(data => {
      this.foods = data;
    });
  }

  selectFood(food) {
    if (this.selectedFood == food) {
      this.selectedFood = null;
    } else {
      this.selectedFood = food;
    }
  }
}
