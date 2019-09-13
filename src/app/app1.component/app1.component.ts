import { Component } from '@angular/core';
@Component({
    selector : 'app-roota',
    templateUrl : './app1.component.html',
    styleUrls : ['./app1.component.css']
})

export class App1Component {
public sno1;
public load: any;
public age: number;
public fstname: string;
public lstname: string;
public sno: number;
public s: any;
public e: number;
public  array: any = [];
public obj: any = {};
public f1 = () => {
this.obj = {Sl: this.sno, firstName: this.fstname, LastName: this.lstname, Age : this.age};
this.array.push(this.obj);
console.log(this.array);
}
public f2 = (index) => {
    if ( this.e === index) {
this.array[index].Sl = this.sno; this.array[index].firstName = this.fstname;
this.array[index].LastName = this.lstname; this.array[index].Age = this.age;
}
}
public f4 = (index) => {
    this.s = this.array[index];
    this.sno = this.s.Sl; this.fstname = this.s.firstName; this.lstname = this.s.LastName;
    this.age = this.s.Age;
    this.e = index;
}
public f3 = (index) => {
    this.array.splice( index , 1);
    }
    public f5 = () => {
        console.log(this.load);
    };

}
