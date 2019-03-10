import { Component, OnInit } from '@angular/core';

import { RecordsService } from '../records.service';

interface myData{
  obj:Object
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
records = []
  constructor(private firstservice:RecordsService) { }

  ngOnInit() {
    this.firstservice.getDatas().subscribe(data =>{
      this.records = data;
    }) 
  }

}
