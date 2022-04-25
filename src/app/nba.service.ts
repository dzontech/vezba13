import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Teams } from './nbasingle/nbasingle.component';

@Injectable({
  providedIn: 'root'
})
export class NBAService {

  private urlCo = 'https://restcountries.com/v2/all?fields=name,capital,population,area,flag,region';

  constructor(private http: HttpClient) { }

  getCo():Observable<Teams> {
    return this.http.get<any>("assets/nba.json");
  }
}
