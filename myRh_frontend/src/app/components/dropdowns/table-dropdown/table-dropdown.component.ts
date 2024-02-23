import { Component, AfterViewInit, ViewChild, ElementRef } from "@angular/core";


@Component({
  selector: "app-table-dropdown",
  templateUrl: "./table-dropdown.component.html",
})
export class TableDropdownComponent implements AfterViewInit {
  dropdownPopoverShow = false;
  @ViewChild("btnDropdownRef", { static: false }) btnDropdownRef!: ElementRef;
  @ViewChild("popoverDropdownRef", { static: false })
  popoverDropdownRef!: ElementRef;
  hideDropdown: any;
  ngAfterViewInit() {
    document.addEventListener("click", this.hideDropdown.bind(this));
  }
  toggleDropdown(event: any) {
    event.preventDefault();
    this.dropdownPopoverShow = !this.dropdownPopoverShow;
  }
}
