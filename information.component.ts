import { Component, OnInit } from '@angular/core';
import {IData} from './data';
import {InformationService} from '../information.service'


@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  
})
export class InformationComponent implements OnInit {

  constructor(private _informationService:InformationService) { }
  information:IData[];
  clicked:boolean=false;

  empId:number;
  empName:string;
  empSal:number;
  empDep:string;
  empjoiningdate:string;
  index2:number;

  ngOnInit() {
    this._informationService.getInfo().subscribe(data=>this.information=data);
    console.log("abcd");

  }

  sortById()
  {
    this.information.sort((a,b)=>{return a.empId-b.empId});
  }

  sortByName()
  {
    this.information.sort((a,b)=>{return a.empName.localeCompare(b.empName)});
  }
  sortBySal()
  {
    this.information.sort((a,b)=>{return a.empSal-b.empSal});
  }
  sortByDep()
  {
    this.information.sort((a,b)=>{return a.empDep.localeCompare(b.empDep)});
  }
  sortByjoiningdate()
  {
    this.information.sort(function(a,b){
      var c:any=a.empjoiningdate.toString().split('/');
      var d:any=b.empjoiningdate.toString().split('/');
      return c[2]-d[2] || c[1]-d[1] || c[0]-d[0]
    });
  }

  delete(x:number)
  {
    this.information.splice(x,1);
  }
  update(y:number)
  {
  
    this.empId=this.information[y].empId;
    this.empName=this.information[y].empName;
    this.empSal=this.information[y].empSal;
    this.empDep=this.information[y].empDep;
    this.empjoiningdate=this.information[y].empjoiningdate;
    this.index2=y;
    this.clicked=!this.clicked;
  }
  validate()
  {
    let j=this.information.findIndex((a)=>a.empId==this.empId);
    this.information[j].empId=this.empId;
    this.information[j].empName=this.empName;
    this.information[j].empSal=this.empSal;
    this.information[j].empDep=this.empDep;
    this.information[j].empjoiningdate=this.empjoiningdate;
    this.clicked=!this.clicked;
  }
}
