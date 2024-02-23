import {Component, OnInit} from "@angular/core";
import {JobOffersService} from "../../services/jobOffers.service";
import {JobOfferInterface} from "../../interfaces/jobOffer.interface";



@Component({
  selector: 'app-job-offer',
  templateUrl: './jobOffer.component.html'
  })
export class JobOfferComponent implements OnInit {
  public jobOffers: JobOfferInterface[] = [];

  constructor(private _jobOfferService: JobOffersService) {
  }

  ngOnInit() {
    this._jobOfferService.getJobOffers().subscribe(data => this.jobOffers = data.content);
  }
}
