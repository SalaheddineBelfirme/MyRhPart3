import { Component } from '@angular/core';
import {FormBuilder, Validator, Validators} from "@angular/forms";
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private formBuilder: FormBuilder, private _authService : AuthService) { }

  registerForm = this.formBuilder.group({
    name: ['', Validators.required],
    phone: ['', Validators.required, Validators.minLength(10)],
    email: ['' , [Validators.required, Validators.email]],
    password: ['', Validators.required],
    address: ['', Validators.required],
    city: ['', Validators.required],
    logo: ['']
  });


  register() {
    this._authService.registerCompany(this.registerForm.value).subscribe( data => {
      // if success store token in local storage
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(this.registerForm.value));
      // redirect to home page
      window.location.href = '/';
    } );
  }



  getFilePath(event: any) {
    //set logo value to file name
    this.registerForm.patchValue({
      logo: event.target.files[0].name
    });
  }
}
