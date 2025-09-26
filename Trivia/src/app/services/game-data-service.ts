import { Injectable } from '@angular/core';
import { TriviaApi } from './trivia-api';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameDataService {

  private selectedGenres : number[] = [];

  private currentScore = 0;

  private currentRound = 0;
  private numberOfRounds = 0;

  constructor(private http: HttpClient) {}

  startNewGame() {
    this.currentRound = 0;
    this.currentScore = 0;
  }

  addPoint() {
    this.currentScore++;
  }

  getScore() {
    return this.currentScore;
  }

nextRound() {
    if (this.currentRound < this.getTotalRounds() - 1) {
          this.currentRound++;
    }
  }

  setRounds(rounds: number) {
    this.numberOfRounds = rounds;
  }

  getRound() {
    return this.currentRound;
  }
  
  getTotalRounds() {
    return this.numberOfRounds;
  }

  setSelectedGenres(genres: number[]) {
    this.selectedGenres = genres;
  }

  getSelectedGenres() {
    return this.selectedGenres;
  }

}
