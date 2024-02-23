import {Component, Input} from "@angular/core";
import {JobOfferInterface} from "../../interfaces/jobOffer.interface";


@Component({
  selector: 'app-job-offer-card',
  templateUrl: './job-offer-card.component.html',

})
export class JobOfferCardComponent {
  @Input() jobOffer!: JobOfferInterface;
  isPostulationFormVisible: boolean = false;
  selectedJobOfferId: number = 0;
  addpostulation(jobOfferId: number) {
    this.selectedJobOfferId = jobOfferId;
    this.isPostulationFormVisible = true;
  }


}
