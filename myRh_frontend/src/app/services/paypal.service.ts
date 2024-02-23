import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PayPalService {
  private apiUrl =  'http://localhost:8080/api/paypal';

  constructor(private http: HttpClient) {}

}
