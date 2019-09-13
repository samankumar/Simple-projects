import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApicallService {
 public apiUrl1 = 'https://restcountries.eu/rest/v2/all';
 public z;
  constructor(private  http: HttpClient) { }
  getData(): Observable<any> {
    this.z = [];
    this.z.push(this.http.get(this.apiUrl1));
    return this.z;
}
}

