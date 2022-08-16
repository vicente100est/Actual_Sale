import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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
}
