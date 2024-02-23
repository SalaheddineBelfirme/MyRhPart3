import {Component} from "@angular/core";
import {AuthenticatedCompanyInterface} from "../../interfaces/AuthtenticatedCompany.interface";


@Component( {
selector: "app-admin-sidebar",
templateUrl: "./admin-sidebar.component.html",
})
export class AdminSidebarComponent {
  collapseShow = 'hidden';
  // company: AuthenticatedCompanyInterface  = JSON.parse(localStorage.getItem('user') || '{}');


  constructor() {}

  ngOnInit() {

  }
  toggleCollapseShow(classes: string) {
    this.collapseShow = classes;
  }

  logout() {
    localStorage.removeItem('admin');
    localStorage.removeItem('token');
    window.location.href = '/auth/admin';
  }
}
