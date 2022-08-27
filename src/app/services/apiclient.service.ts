import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Response } from '../models/response';
import { Customer } from '../models/customer';

const httpOption = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ApiclientService {

  url: string = 'https://localhost:44330/api/Customer';

  constructor(
    private _http: HttpClient
  ) { }

  getCustomers(): Observable<Response> {
    return this._http.get<Response>(this.url);
  }

  add(customer: Customer): Observable<Response>{
    return this._http.post<Response>(this.url, customer, httpOption);
  }

  UpDate(customer: Customer): Observable<Response>{
    return this._http.put<Response>(this.url, customer, httpOption);
  }

  Delete(idCustomer: number): Observable<Response>{
    return this._http.delete<Response>(`${this.url}/${idCustomer}`);
  }
}
