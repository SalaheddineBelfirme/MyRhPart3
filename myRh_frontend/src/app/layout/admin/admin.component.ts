import {Component, OnInit} from "@angular/core";


@Component(
{
selector: "app-admin",
templateUrl: "./admin.component.html",
}
)
export class AdminComponent implements OnInit
{

  constructor() { }

  ngOnInit(): void{
    // check if admin is logged in from local storage
    if (localStorage.getItem("admin") == null)
    {
      // if not, redirect to login page
      window.location.href = "/auth/admin";
    }
  }
}
