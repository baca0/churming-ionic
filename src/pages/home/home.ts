import {Component} from '@angular/core';
import {Http} from '@angular/http';

import {NavController} from 'ionic-angular';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/Rx';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  static get parameters() {
    return [[NavController], [Http]];
  }

  private nation: string;
  private foods: any;
  private selectedFood: any;

  constructor(public navCtrl: NavController, private http: Http) {
    // TODO: 나라가 추가될 때 선택 가능한 형태로
    this.nation = "South Korea";
    this.findFoods("nationId");

    this.selectedFood = null;
  }

  ionViewDidLoad() {
    console.log('hello');
  }

  findFoods(nationId) {
    return this.http.get('http://localhost:8000/foods').map(res => res.json()).subscribe(data => {
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

  searchFoods(ev: any) {
    // Reset items back to all of the items
    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.foods = this.foods.filter((food) => {
        // TODO: why occur error? TypeError: platform.toLowerCase is not a function
        // return (food.name.toLowerCase().indexOf(val.toLowerCase()) > -1 ||
        // food.englishName.toLowerCase().indexOf(val.toLowerCase()) > -1 ||
        // food.description.toLowerCase().indexOf(val.toLowerCase()) > -1)
        return true;
      });
    }
  }

}

