import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';





@Component({
  selector: 'app-nba',
  templateUrl: './nba.component.html',
  styleUrls: ['./nba.component.css']
})
export class NbaComponent implements OnInit {

  nba:any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
   this.http.get<any>("assets/nba.json").subscribe(data=>this.nba=data);
  }

  

 

 

}
