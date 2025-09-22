import { Routes } from '@angular/router';
import { Sologame } from './components/sologame/sologame';
import { Verusgame } from './components/verusgame/verusgame';
import { Homepage } from './components/homepage/homepage';
import { GameSelection } from './components/game-selection/game-selection';
import { EndGameComponent } from './components/end-game-component/end-game-component';
import { ChangeLog } from './components/change-log/change-log';
import { MovieList } from './components/movie-list/movie-list';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LeaderboardComponent } from './components/leaderboard/leaderboard';

@NgModule({
  imports: [RouterModule],
  exports: [RouterModule]
})
export class AppRoutingModule {}


export const routes: Routes = [
    {path: '',   redirectTo: 'home', pathMatch: 'full'},
    {path: 'home',          component: Homepage},
    {path: 'soloGame',      component: Sologame}, 
    {path: 'versusGame',    component: Verusgame},
    {path: 'gameSelection', component: GameSelection},
    {path: 'endGame',       component: EndGameComponent},
    {path: 'changeLog',     component: ChangeLog},
    {path: 'movieList',     component: MovieList},
    {path: 'leaderboard',   component: LeaderboardComponent}    
];
