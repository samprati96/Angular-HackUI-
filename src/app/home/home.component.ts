import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  emps:any;
  constructor(private service:DataService) 
  { 

  }

  ngOnInit() 
  {
     let observableResult=this.service.select();
     
     observableResult.subscribe((result)=>{
       console.log(result);
       this.emps=result;

     });



    //  this.emps=[
    //  {"No":1,"Name":"Samprati","Age":23},
    //  {"No":2,"Name":"Tai","Age":25},
    // {"No":3,"Name":"Baba","Age":60}
    //];
  }

}
