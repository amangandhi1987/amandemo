import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { error } from 'console';
import { response } from 'express';

@Component({
  selector: 'app-login',
  standalone: false,
  
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  user=""
  password=""
  message=""
  result:any[]=[]
  constructor(private http:HttpClient,private route:ActivatedRoute,private router:Router){


  };

  login(){
   this.http.get('http://localhost:3000/getClients').subscribe((response:any)=>{
    this.result=response;
    this.message="Enter valid user and password"
   for (let i=0;i<this.result.length;i++)
   {
    if (this.user==this.result[i].email && this.password==this.result[i].password ){
      this.message="login successful!!"
      this.router.navigate(['/welcome/'+this.result[i].name+'/'+this.result[i].id],{state:{message:"login successful"}});
      break;
    }
    
    console.log("username :"+this.result[i].email +" and pwd is  "+this.result[i].password);
   }

   },(error)=>{
    console.error("error in fetching records")
   })

  }

}
