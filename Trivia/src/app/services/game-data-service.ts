import { Injectable } from '@angular/core';
import { TriviaApi } from './trivia-api';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameDataService {

  // -------- Game settings and state -------- //
  // HAS NOT BEEN CONNECTED TO ANY COMPONENTS OR API CALLS YET

  private moviePool: any[] = [];
  private selectedMovies: any[] = [];
  
  private username = '';
  private color = '';
  private numberOfPlayers = 1;
  private numberOfRounds = 1;
  private difficulty = 'easy'; // default difficulty
  private genre = 'action'; // default genre
  private timeLimit = 30; // default time limit
  private questionType = 'multiple-choice'; // default question type

  private currentScore = 0;
  private currentRound = 0;

  private gameData: any = {};

  constructor(private triviaApi: TriviaApi, private http: HttpClient) {}

  // -------- Movie and Game Management -------- //

  loadMoviePool(): Observable<string[]> {
  return this.http.get<{ movies: string[] }>('assets/movies.json')
    .pipe(map((data: { movies: any; }) => data.movies));
}

  setMoviePool(pool: string[]) {
    console.log('Movie pool loaded:', pool);
    this.moviePool = pool;
  }

  startNewGame(rounds: number) {
    // Shuffle the selected movies and pick the number of rounds specified
    const shuffled = this.moviePool.sort(() => 0.5 - Math.random());
    this.selectedMovies = shuffled.slice(0, rounds)
    this.currentRound = 0;
    this.currentScore = 0;
  }

  getCurrentMovie() {
    // Make id (by index of round in the selected movie array) and call the TriviaApi to get the movie details
    const id = this.selectedMovies[this.currentRound];
    return this.triviaApi.getMovieById(id);
    console.log("Current Movie ID: " + id);
  }

  // -------- Round and Score Management -------- //

  nextRound() {
    if (this.currentRound < this.selectedMovies.length - 1) {
          this.currentRound++;
    }
  }

  addPoint() {
    this.currentScore++;
  }

  getScore() {
    return this.currentScore;
  }

  getRound() {
    return this.currentRound;
  }
  
  getTotalRounds() {
    return this.selectedMovies.length;
  }

  // -------- Game Settings Management -------- //
  // See if the game data is being set correctly in the GameDataService from the GameSelection component

  setGameData(data: any) {
    this.gameData = data;
  }

  getGameData() {
    return this.gameData;
  }

}
