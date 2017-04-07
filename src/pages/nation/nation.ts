import { Component } from '@angular/core';
import { HomePage } from '../home/home';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-nation',
  templateUrl: 'nation.html'
})
export class NationPage {

  constructor(public navCtrl: NavController) {

  }

  tab1Root: any;

  selectNation() {
    console.log('selectNation');
    // TODO: tab view에서는 정상동작하지 않는구나
    // this.tab1Root = HomePage;
  }

}
