import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class RecordsService {

  constructor(private http:HttpClient) { }
    getDatas(){
      return this.http.get<myData>('http://localhost:8000/employees/')
      
    }

}
