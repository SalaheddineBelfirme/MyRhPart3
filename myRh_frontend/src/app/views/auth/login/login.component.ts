import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../services/auth.service";
import { FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  constructor(private _authService: AuthService) {

  }


  login() {
    this._authService.loginCompany(this.loginForm.value).subscribe(data => {
      // store token in local storage
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.company));

      window.location.href = '/company/job-offer';
    });
  }


  ngOnInit(): void {
  }
}
