import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { error } from 'console';

@Component({
  selector: 'app-register',
  standalone: false,
  
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
   name="";
   email="";
   user="";
   address="";
   password="";
   message=""

   constructor(private http:HttpClient,private route:ActivatedRoute,private router:Router){

   }

   register(){
    const client={name:this.name,email:this.email,user:this.user,address:this.address,
      password:this.password
    }
this.http.post('http://localhost:3000/InsertClient',client).subscribe((response:any)=>{
  this.message=response.message;
  this.router.navigate(['/login'])
},(error)=>{
  console.error("error in inserting data",error)
 console.log("error in inserting data");

}
)
   }


}
