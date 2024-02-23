import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { JobOffersService } from "../../services/jobOffers.service";
import {CompanyService} from "../../services/company.service";

@Component({
  selector: "app-job-offer-form",
  templateUrl: "./job-offer-form.component.html",
})
export class JobOfferFormComponent implements OnInit {
  success: boolean = false;
  error: boolean = false;
  remainingJobOffers: number = 0;
  user = JSON.parse(localStorage.getItem("user") || "{}");
  companyDetails: any;
  constructor(
    private formBuilder: FormBuilder,
    private _jobOfferService: JobOffersService,
    private _companyService: CompanyService
  ) {
  }

  jobOfferForm = this.formBuilder.group({
    title: ["", Validators.required],
    description: ["", Validators.required],
    salary: ["", Validators.required],
    location: ["", Validators.required],
    profile: ["", Validators.required],
    educationLevel: ["", Validators.required],
    experienceLevel: [""],
    contractType: ["", Validators.required],
    companyId: [null]
  });

  async ngOnInit(): Promise<void> {
    await this.fetchRemainingJobOffersCount();

    // check if user is logged in
    if (localStorage.getItem("token") === null) {
      window.location.href = "/auth/login";
    }



    this._companyService.getCompanyDetails(this.user.id).subscribe(
      (data) => {
        this.companyDetails = data;

        console.log("Company details retrieved successfully:", this.companyDetails);
      },
      (error) => {
        console.log("Error fetching company details:", error);
      }
    );
  }
  async fetchRemainingJobOffersCount(): Promise<void> {
    try {
      this._jobOfferService.getRemainingJobOffersCount().subscribe(
        (count: number) => {
          this.remainingJobOffers = count;
        },
        (error) => {
          console.error("Error fetching remaining job offers count:", error);
        }
      );
    } catch (error) {
      console.error("Error fetching remaining job offers count:", error);
    }
  }



  addJobOffer(): void {

    if (this.companyDetails) {
      const packageType = this.companyDetails.packageType;

      if (packageType === 'premium' || (packageType === 'basic' && this.remainingJobOffers < 10) || (packageType === null && this.remainingJobOffers < 3)) {
        this._jobOfferService.addJobOffer(this.jobOfferForm.value).subscribe(
          (data) => {
            console.log("Job offer submitted successfully");
            this.success = true;
            this.resetForm();
          },
          (error) => {
            console.log("An error occurred while inserting a new job offer record");
            console.log(error);
            this.error = true;
          }
        );
      } else {
        window.location.href = "/company/subscription";
      }
    }
  }


  resetForm(): void {
    this.jobOfferForm.reset();
  }
}
