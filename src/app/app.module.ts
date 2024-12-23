import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { SchedulemeetingComponent } from './schedulemeeting/schedulemeeting.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ViewmeetingComponent } from './viewmeeting/viewmeeting.component';
import { FormsModule } from '@angular/forms'
import {  HttpClientModule } from '@angular/common/http';
import { RouterModule,Routes } from '@angular/router';

const routes:Routes=[
  {path:'',redirectTo:"/login",pathMatch:"full"},
  {path:'register' ,component:RegisterComponent},
  {path:'login' ,component:LoginComponent},
  {path:'schedulemeeting/:id' ,component:SchedulemeetingComponent},
  {path:'welcome/:name/:id' ,component:WelcomeComponent},
  {path:'view/:id' ,component:ViewmeetingComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    SchedulemeetingComponent,
    WelcomeComponent,
    ViewmeetingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
