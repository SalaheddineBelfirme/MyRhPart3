import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostulationService } from '../../../services/postulation.service';

@Component({
  selector: 'app-card-postulation-form',
  templateUrl: './card-postulation-form.component.html',
  styleUrls: ['./card-postulation-form.component.css']
})
export class CardPostulationFormComponent {
  @Input() jobOfferId!: number;
  postulationForm: FormGroup;
  success: boolean = false;
  error: boolean = false;

  constructor(private formBuilder: FormBuilder, private postulationService: PostulationService) {
    this.postulationForm = this.formBuilder.group({
      pdfFile: ['', Validators.required],
      jobOfferId: [this.jobOfferId, Validators.required],
    });
  }

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.postulationForm.get('pdfFile')?.setValue(file);
    }
  }

  submitPostulation() {
    const formData = new FormData();


    formData.append('pdfFile', this.postulationForm.get('pdfFile')?.value as File);
    formData.append('jobOfferId', this.jobOfferId.toString());

    this.postulationService.addPostulation(formData).subscribe(
      (response) => {
        this.success = true;
        this.postulationForm.reset();
      },
      (error) => {
        this.error = true;
        console.error('Error submitting postulation:', error);
      }
    );


  }
}
