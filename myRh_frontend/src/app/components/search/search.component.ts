import {Component} from "@angular/core";


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',

})
export class SearchComponent {

  search = "";

  constructor() {}


  initSearch() {
    console.log(this.search);
  }
}
