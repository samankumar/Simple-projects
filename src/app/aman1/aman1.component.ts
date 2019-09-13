import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-aman1',
  templateUrl: './aman1.component.html',
  styleUrls: ['./aman1.component.css']
})
export class Aman1Component implements OnInit {
  public fstName;
  public age;
  public  x = {Name : '',  Age: '' };
  constructor() { }
  ngOnInit() {
    this.x.Name = this.fstName; this.x.Age = this.age;
  }

  public data = () => {
 return this.x;
 }
}
