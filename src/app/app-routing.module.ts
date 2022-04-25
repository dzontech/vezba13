import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NbaComponent } from './nba/nba.component';
import { NbasingleComponent } from './nbasingle/nbasingle.component';



const routes: Routes = [
  {
    path: 'nba', component: NbaComponent
  },
  {
    path: 'nba/:id', component: NbasingleComponent
  },
  {
    path: '', redirectTo: 'nba', pathMatch: 'full'
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
