import { Component, OnInit } from '@angular/core';
import { TriviaInfoLayout } from './interfaces/trivia-info-layout';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TriviaApi } from './services/trivia-api';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./components/navbar/navbar";
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeaderboardComponent } from './components/leaderboard/leaderboard';

const routes: Routes = [
  { path: 'leaderboard', component: LeaderboardComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' } // default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}


@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule, RouterOutlet, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

  export class App {
  
}
