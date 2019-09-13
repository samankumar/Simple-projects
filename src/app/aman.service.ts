import { Injectable, OnInit } from '@angular/core';
import {Aman1Component } from './aman1/aman1.component';
@Injectable({
  providedIn: 'root'
})
export class AmanService {
  constructor(public Aman1: Aman1Component) { }

  public method = () => {
   return this.Aman1.x;
 }
}
