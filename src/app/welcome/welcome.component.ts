import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router,NavigationStart, Event } from '@angular/router';
import { error } from 'console';
import { response } from 'express';

@Component({
  selector: 'app-welcome',
  standalone: false,
  
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent implements OnInit{
  message=""
  user=""
  id:any|undefined
  meetings:any[]=[]
  constructor(private router:Router,
    private route:ActivatedRoute,
    private http:HttpClient
  ){

   

  }
  ngOnInit(): void {

    this.router.events.subscribe((event: Event) => { 
      if (event instanceof NavigationStart) {
         const navigation = this.router.getCurrentNavigation(); 
         const state = navigation?.extras.state as { message: string } | undefined; if (state && state.message) {
           this.message = state.message; 
          } else { this.message = 'No message provided.'; 

          } 
        } 
      });
    
   this.route.paramMap.subscribe(params=>{
    const temp=params.get('name');
    if(temp!=null){
      this.user=temp;
      console.log("user name is "+temp);
    }
    const temp1=params.get('id');
    if(temp!=null){
      this.id=temp1;
      console.log("id is "+temp1);
    }
   })
      
  }
view()
   {
  this.router.navigate(['/view/'+this.id])
   }

   navigate(){
    this.router.navigate(['/schedulemeeting/'+this.id])
   }


  
}
