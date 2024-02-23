
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {CompanyInterface} from "../interfaces/Company.interface";
import {JobOfferInterface} from "../interfaces/jobOffer.interface";
@Injectable({
  providedIn: 'root',
})
export class CompanyService {
  private apiUrl = 'http://localhost:8080/api/company';
  private token = localStorage.getItem("token");
  private options = {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    }
  }

  constructor(private http: HttpClient) {}


  getCompanyDetails(companyId: number): Observable<CompanyInterface> {

     const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.token);
    let url = `http://localhost:8080/api/company/details/${companyId}`;
    return this.http.get<CompanyInterface>(url, { headers });
  }
  updateCompanyPackageType(packageType: string): Observable<any> {

    return this.http.post(`${this.apiUrl}/update-package-type`, { packageType });
  }

  save(company_data: any) {
    return this.http.post(`${this.apiUrl}/update-package-type`, {});

  }


  formatCompany(data: CompanyInterface) {

  }
}
