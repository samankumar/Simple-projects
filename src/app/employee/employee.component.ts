import { Component} from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  public apiUrl = 'https://restcountries.eu/rest/v2/all';
  constructor(public  http: HttpClient) { }

getdata = () => {
  this.http.get(this.apiUrl).subscribe((d) => console.log(d));
  this.http.post(this.apiUrl, {
name : 'AMAN',
age : 29
  }).subscribe(( data) =>  console.log(data));
}

}
