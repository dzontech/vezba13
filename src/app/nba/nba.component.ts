import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NBAService } from '../nba.service';





@Component({
  selector: 'app-nba',
  templateUrl: './nba.component.html',
  styleUrls: ['./nba.component.css']
})
export class NbaComponent implements OnInit {

  nba:any;

  constructor(private http: HttpClient, private m: NBAService) { }

  ngOnInit(): void {
  this.m.getCo().subscribe(value => this.nba = value);
  }

  

 

 

}
