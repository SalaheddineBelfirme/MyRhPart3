import {Component, OnInit} from '@angular/core';
import {JobOfferInterface} from "../../interfaces/jobOffer.interface";
import {JobOffersService} from "../../services/jobOffers.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public jobOffers: JobOfferInterface[] = [];
  date = new Date().getFullYear();
  username : string = '';
  usernameStatus : boolean = false;
  constructor(private _jobOfferService: JobOffersService) {
  }

  ngOnInit() {
    this._jobOfferService.getJobOffers().subscribe(data => this.jobOffers = data.content);
  }




  onInputText(event: Event){
    this.username = (<HTMLInputElement>event.target).value
  }

  resetUserName() {
    this.username = '';
  }
}
