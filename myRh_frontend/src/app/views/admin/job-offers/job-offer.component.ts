import {Component, OnInit} from "@angular/core";
import {JobOffersService} from "../../../services/jobOffers.service";
import {JobOfferInterface} from "../../../interfaces/jobOffer.interface";
import {PaginationJobOfferInterface} from "../../../interfaces/paginationJobOffer.interface";
import {data} from "autoprefixer";


@Component(
  {
    selector: 'app-admin-job-offer',
    templateUrl: './job-offer.component.html',
  }
)
export class AdminJobOfferComponent implements OnInit {
  page: number=0;
  currentPage!: number;
  pendingJobOffers!: PaginationJobOfferInterface;
  jobOffers!: JobOfferInterface[];
  totalPages!:number[];

  constructor(private jobOfferService: JobOffersService) {
  }

  ngOnInit() {
    this.jobOfferService.getPendingJobOffers(this.page).subscribe(data =>{
      this.pendingJobOffers = data;
      this.totalPages = Array(data.totalPages).fill(0).map((x,i)=>i);
      this.jobOffers = data.content;
      this.currentPage = data.pageNo;
    })


  }

  setPage(page: number): void {
    this.jobOfferService.getPendingJobOffers(page).subscribe(data =>
      {
        this.pendingJobOffers = data;
        this.jobOffers = data.content;
        this.currentPage = data.pageNo;
      }
    );

  }


  updateStatus(id: number, status: string) {
    console.log(status);
    this.jobOfferService.updateJobOfferStatus(id, status).subscribe(data => {
      this.jobOffers = this.jobOffers.filter(jobOffer => jobOffer.id !== id);
      console.log(data);
    });
  }
}
