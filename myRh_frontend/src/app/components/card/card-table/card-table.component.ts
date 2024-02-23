import { Component, OnInit, Input } from "@angular/core";
import {JobOfferInterface} from "../../../interfaces/jobOffer.interface";

@Component({
  selector: "app-card-table",
  templateUrl: "./card-table.component.html",
})
export class CardTableComponent implements OnInit {
  @Input() jobOffer!: JobOfferInterface;



  constructor() {}

  ngOnInit(): void {

  }
}
