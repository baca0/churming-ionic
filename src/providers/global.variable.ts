import {Injectable} from "@angular/core";

@Injectable()
export class GlobalVariable {
  allFoods: any[];

  public constructor() {
    this.allFoods = [];
  }

  setAllFoods(foods) {
    this.allFoods = foods;
  }

  getAllFoods() {
    return this.allFoods;
  }

  replaceLineBreak(s: string) {
    return s && s.replace(/,/gi, '<br />');
  }

}
