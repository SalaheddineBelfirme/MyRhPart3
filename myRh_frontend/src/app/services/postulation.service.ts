import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Postulation} from "../interfaces/postulation";



@Injectable({
  providedIn: 'root'
})
export class PostulationService {
  private _apiURI: string = 'http://localhost:8080/api/postulations';
  private token = localStorage.getItem('token');

  private options = {
    headers: new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    })
  }

  constructor(private http: HttpClient) {}

  addPostulation(postulation: any): Observable<Postulation> {
    if(this.token == null) return this.http.post<Postulation>(this._apiURI, postulation);
    return this.http.post<Postulation>(this._apiURI, postulation,this.options);


  }
}
