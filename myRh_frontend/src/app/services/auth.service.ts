import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {FormGroup} from "@angular/forms";


@Injectable(
  {
    providedIn: 'root'
  }
)
export class AuthService {
  private _apiURI: string = 'http://localhost:8080/api/auth';
  private options = {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  }

  constructor(private Http: HttpClient) {

  }

  registerCompany(value:any):Observable<any> {
    return this.Http.post<any>(this._apiURI+"/register",value, this.options);
  }

  login(value: {}):Observable<any> {
    return this.Http.post<any>(this._apiURI+"/authenticate",value, this.options);
  }
  loginCompany(value: {}):Observable<any> {
    return this.Http.post<any>(this._apiURI+"/authenticate",value, this.options);
  }




  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    // redirect to login page
    window.location.href = '/auth/login';
  }
}
