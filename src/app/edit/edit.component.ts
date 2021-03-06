import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
   //emp:any;
  emp={"No":"","Name":"","Age":""};
  constructor(private route:ActivatedRoute,
    private router:Router,
    private service:DataService) 
  {

  }

  ngOnInit() 
  {
     this.route.paramMap.subscribe((result)=>{
       let No = result.get("No");

       let observableResult= this.service.selectByNo(No);

       observableResult.subscribe((data)=>{
          console.log(data);
          this.emp=data[0];
       });
     });
  }

  Update()
  {
    console.log("-------------------------------");
    console.log(this.emp);

   let observeRes= this.service.update(this.emp);

   observeRes.subscribe((res)=>{

    console.log("-------------------------------");

     console.log(res);

     this.router.navigate(['/home']);
     
    console.log("-------------------------------");

   });
  }

}
