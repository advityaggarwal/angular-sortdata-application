import { Component, OnInit } from '@angular/core';
import {IData} from './data';
import {InformationService} from '../information.service'


@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {

  constructor(private _informationService:InformationService) { }
  information:IData[];


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
    this.information.sort((a,b)=>/*{a = new Date(a.empjoiningdate);
    b = new Date(b.empjoiningdate);
    return a>b ? -1 : a<b ? 1 : 0;}*/{var c=new Date(a.empjoiningdate);var d=new Date(b.empjoiningdate);
      return c-d;});
  }

  delete(x:number)
  {
    this.information.splice(x,1);
  }
  
}
