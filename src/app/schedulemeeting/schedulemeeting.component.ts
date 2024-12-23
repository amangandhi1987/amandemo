import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { error } from 'console';

@Component({
  selector: 'app-schedulemeeting',
  standalone: false,
  
  templateUrl: './schedulemeeting.component.html',
  styleUrl: './schedulemeeting.component.css'
})
export class SchedulemeetingComponent implements OnInit{
ngOnInit(): void {
  this.route.paramMap.subscribe(params=>{
    const temp=params.get('id');
    if(temp!=null){
      this.client_id=temp;
    }
  })
    
}

constructor(private http:HttpClient,private route:ActivatedRoute,
  private router:Router
){

}
message=""
client_id=""
topic=""
start_time=""
end_time=""
number_of_people=""

Schedule(){

  console.log("client_id"+this.client_id);
  console.log("start_time"+this.start_time);
  const meeting={client_id:this.client_id,
    topic :this.topic,start_time:this.start_time,end_time:this.end_time,number_of_people:this.number_of_people}
this.http.post('http://localhost:3000/scheduleMeeting',meeting).subscribe((response:any)=>
{
  console.log("insert successfull for meeting "+this.client_id)
  this.message=response.message;
  this.router.navigate(['/view/'+this.client_id])
},(error)=>
{
  console.error("Error in creating schedule",error)
})
}
}
