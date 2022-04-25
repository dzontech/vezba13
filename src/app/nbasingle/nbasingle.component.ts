import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { debounceTime, forkJoin } from 'rxjs';
import { NBAService } from '../nba.service';

export interface Team {
  id: number;
  name: string;
  logo: string;
  played: number;
  wins: number;
  losses: number;
  winPercent: number;
  gamesBehind: string;
  streak: number;
  lastfive: string;
}

export interface Teams {
  teams: Team[];
}

@Component({
  selector: 'app-nbasingle',
  templateUrl: './nbasingle.component.html',
  styleUrls: ['./nbasingle.component.css'],
})
export class NbasingleComponent implements OnInit {
  nbasingle!: Team;
  nbas: Teams[] = [];

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private m: NBAService
  ) {}

  ngOnInit(): void {
    this.m.getCo().subscribe((data) => {
      this.route.params.subscribe((value) => {
        console.log(data.teams[value['id']-1]);
        this.nbasingle = data.teams[value['id']-1];
      });
    }); 
  }
}
