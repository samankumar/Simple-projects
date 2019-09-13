import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-post-api',
  templateUrl: './post-api.component.html',
  styleUrls: ['./post-api.component.css']
})
export class PostApiComponent implements OnInit {
  postData = {
    test: 'my content',
   };
   json;
   public obj;
   url = 'http://httpbin.org/post';
  constructor(private http: HttpClient) {
  }
  ngOnInit() {
    this.http.post('http://httpbin.org/post', {args: 12345}).subscribe(args => {console.log(args)});
    this.http.post( this.url, this.postData ).toPromise().then((data) => {console.log(data)});
  }

}
