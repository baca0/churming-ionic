import {Component} from "@angular/core";
import {Http} from "@angular/http";
import {NavController} from "ionic-angular";
import "rxjs/add/operator/map";
import "rxjs/add/operator/toPromise";
import "rxjs/Rx";

@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {
  private nation: string;
  private allFoods: any;
  private foods: any;


  constructor(navCtrl: NavController, private http: Http) {
    // TODO: 나라가 추가될 때 선택 가능한 형태로
    this.nation = "South Korea";
    this.findFoods("nationId");
  }

  ionViewDidLoad() {
    console.log('hello');
  }

  findFoods(nationId) {
    return this.http.get('http://localhost:8000/foods').map(res => res.json()).subscribe(data => {
      this.allFoods = data;
    });
  }

  searchFoods(ev: any) {
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.foods = this.allFoods.filter((food) => {
        // TODO: why occur error? TypeError: platform.toLowerCase is not a function
        if ((food.name && food.name.indexOf(val) > -1) ||
          (food.englishName && food.englishName.indexOf(val) > -1) ||
          (food.description && food.description.indexOf(val) > -1)) {
          return food;
        }
      });
    } else {
      this.foods = [];
    }
  }

}


