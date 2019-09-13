import { Component, OnInit } from '@angular/core';
import {AmanService} from '../aman.service';
@Component({
  selector: 'app-aman2',
  templateUrl: './aman2.component.html',
  styleUrls: ['./aman2.component.css']
})
export class Aman2Component implements OnInit {
public z;
  constructor(public y: AmanService ) { }

  ngOnInit() {
    console.log(this.y.method());
  }


}
