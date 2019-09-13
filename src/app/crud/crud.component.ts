import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CRUDComponent implements OnInit {
  public id;
  public name;
  public color;
  constructor(public http: HttpClient) {

   }
  public products = {
    id: 1,
    name : 'aman',
    color : 'red'
  };
  ngOnInit() {
  }
 post()  {
   if (this.id === undefined) {

   } else {
   this.products.id = this.id; this.products.name = this.name; this.products.color = this.color;
    this.http.post('http://localhost:5555/products' ,this.products).subscribe((data) => console.log(data));
}
 }
get() { this.http.get('http://localhost:5555/products').subscribe((data) => console.log(data));
}
delete() { this.http.delete('http://localhost:5555/products/id:1');
}
public duplicate(){

}
}
