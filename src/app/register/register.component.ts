import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  emp={"No":"","Name":"","Age":""};
  constructor(private route:ActivatedRoute,
    private router:Router,
    private service:DataService) 
  {

  }


  ngOnInit() {
  }

  Insert()
  {
    console.log("-------------------------------");
    console.log(this.emp);

   let observeRes= this.service.insert(this.emp);

   observeRes.subscribe((res)=>{

    console.log("-------------------------------");

     console.log(res);

     this.router.navigate(['/home']);
     
    console.log("-------------------------------");

   });
  }


}
