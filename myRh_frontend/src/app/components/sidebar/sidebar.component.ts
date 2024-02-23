import { Component, OnInit } from "@angular/core";
import {CompanyInterface} from "../../interfaces/Company.interface";
import {AuthenticatedCompanyInterface} from "../../interfaces/AuthtenticatedCompany.interface";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
})
export class SidebarComponent implements OnInit {
  collapseShow = 'hidden';
  company: AuthenticatedCompanyInterface  = JSON.parse(localStorage.getItem('user') || '{}');


  constructor() {}

  ngOnInit() {
    console.log(this.company.logo);
  }
  toggleCollapseShow(classes: string) {
    this.collapseShow = classes;
  }

  logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    window.location.href = '/auth/login';
  }
}
