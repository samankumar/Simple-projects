import { Component, OnInit } from '@angular/core';
import {ApicallService} from './apicall.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Api Call';
  constructor(private service: ApicallService) {}
  public rest;
ngOnInit() {
  this.service.getData()[0].subscribe(Data => {this.rest = Data , console.log(this.rest)});
}

}
