import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {ApicallService} from './apicall.service';
import {EmployeeComponent} from './employee/employee.component';
import { PostApiComponent } from './post-api/post-api.component';
import {calculatorComponent} from './calculator/calculator';
import { CRUDComponent } from './crud/crud.component';
import {HomeComponent } from './home/home.component';
import {App1Component} from './app1.component/app1.component';
import { Aman1Component } from './aman1/aman1.component';
import { Aman2Component } from './aman2/aman2.component';
import {AmanService} from './aman.service';
@NgModule({
  declarations: [
    AppComponent, EmployeeComponent, PostApiComponent, calculatorComponent, CRUDComponent,
     HomeComponent, App1Component, Aman1Component, Aman2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule, HttpClientModule,

  ],
  providers: [AmanService],
  bootstrap: [Aman1Component ]
})
export class AppModule { }
