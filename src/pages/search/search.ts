import {Component, Inject} from "@angular/core";
import {NavController} from "ionic-angular";
import "rxjs/add/operator/map";
import "rxjs/add/operator/toPromise";
import "rxjs/Rx";
import {GlobalVariable} from "../../providers/global.variable";

@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {
  private foods: any;

  constructor(navCtrl: NavController, @Inject('ApiEndpoint') private apiEndpoint: string, private globalVariable: GlobalVariable) {

  }

  ionViewDidLoad() {
    console.log('hello');
  }

  searchFoods(ev: any) {
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.foods = this.globalVariable.getAllFoods().filter((food) => {
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


