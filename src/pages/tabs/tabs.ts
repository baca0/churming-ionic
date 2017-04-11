import {Component} from "@angular/core";
import {SearchPage} from "../search/search";
import {MorePage} from "../more/more";
import {CategoryPage} from "../category/category";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = CategoryPage;
  tab2Root: any = SearchPage;
  tab3Root: any = MorePage;

  constructor() {

  }
}
