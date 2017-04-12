import {Component, Inject} from '@angular/core';
import {Http} from '@angular/http';

import {NavController} from 'ionic-angular';
import {HomePage} from "../food/home";

@Component({
  selector: 'page-category',
  templateUrl: 'category.html'
})

export class CategoryPage {
  private categories: any;

  constructor(private navCtrl: NavController, private http: Http, @Inject('ApiEndpoint') private apiEndpoint: string) {
    console.log(apiEndpoint);
    this.findCategories();
  }

  findCategories() {
    return this.http.get(`${this.apiEndpoint}/categories`).map(res => res.json()).subscribe(data => {
      this.categories = data;
    });
  }

  selectCategory(category) {
    this.navCtrl.push(HomePage, {
      category: category
    });
  }
}
