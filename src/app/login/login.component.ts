import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userdetails={
    uname:"",
    password:""
  };
  message;
  constructor(private authservice:AuthService,private router:Router) 
  { }

  ngOnInit() 
  {

  }

  SignIn()
  {
   let isValid= this.authservice.CheckUser(this.userdetails);
   if(isValid)
   {
     this.router.navigate(['home']);
   }
   else{
     this.message="Username / Password is invalid!!";
   }
  }

 

}
