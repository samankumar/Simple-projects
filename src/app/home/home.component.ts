import { Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
    selector : 'app-home',
    templateUrl : './home.component.html',
    styleUrls : ['home.component.css']
})

export class HomeComponent implements OnInit {

constructor(private http: HttpClient) { }
public products;
    ngOnInit() {
        this.http.get('http://localhost:5555/products').subscribe(data => {this.products = data; console.log(data)} );
    }
}
