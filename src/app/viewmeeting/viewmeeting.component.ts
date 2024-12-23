import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-viewmeeting',
  standalone: false,
  
  templateUrl: './viewmeeting.component.html',
  styleUrl: './viewmeeting.component.css'
})
export class ViewmeetingComponent implements OnInit {

  meetings:any[]=[];
  id:any|undefined
  constructor(private http:HttpClient,
              private route:ActivatedRoute,
              private router:Router
  ){

  }

ngOnInit(): void {
    this.route.paramMap.subscribe((params)=>{
      const temp =params.get('id');
      if(temp!=null){
        this.id=temp;
      }
    })
    this.view();
}

view()
   {
     this.http.get('http://localhost:3000/getMeetingsForClient/'+this.id).subscribe((response:any)=>{
     this.meetings=response;
     console.log(this.meetings[0].topic)
     },(error)=>
    {
      console.error("error in fetching meetings",error);
    })
  }

}
