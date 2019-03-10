import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {RouterModule,Routes} from '@angular/router';
import {HttpClientModule } from '@angular/common/http';
import { RecordsService } from './records.service';
const ss:Routes=[{
  path:'',
  component:LoginComponent
},
{
  path:'dashboard',
  component:DashboardComponent
}]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    DashboardComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ss)
  ],
  providers: [RecordsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
