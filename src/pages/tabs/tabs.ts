import {Component, Inject} from "@angular/core";
import {SearchPage} from "../search/search";
import {MorePage} from "../more/more";
import {CategoryPage} from "../category/category";
import {UploadPage} from "../upload/upload";
import {Http} from "@angular/http";
import {GlobalVariable} from "../../providers/global.variable";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = CategoryPage;
  tab2Root: any = SearchPage;
  tab3Root: any = MorePage;
  uploadRoot: any = UploadPage;

  constructor(private http: Http, @Inject('ApiEndpoint') private apiEndpoint: string, private globalVariable: GlobalVariable) {
    //this.nation = "South Korea";
    this.findFoods();
  }

  findFoods() {
    return this.http.get(`${this.apiEndpoint}/foods`).map(res => res.json()).subscribe(data => {
      this.globalVariable.setAllFoods(data);
    });
  }
}
