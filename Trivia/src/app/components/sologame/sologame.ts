import { Component, OnInit } from '@angular/core';
import { LeaderboardComponent } from '../leaderboard/leaderboard';
import { TriviaApi } from '../../services/trivia-api';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { GameDataService } from '../../services/game-data-service';

@Component({
  selector: 'app-sologame',
  imports: [CommonModule, FormsModule],
  templateUrl: './sologame.html',
  styleUrls: ['./sologame.css']      
})
export class Sologame implements OnInit {

  constructor(public gameData: GameDataService, public triviaApi: TriviaApi, private router: Router) {}

  movie: any = null;
  reveal: boolean = false;
  userInput: string = " ";
  result: string = " ";
  hasAnswered: boolean = false;
  posterUrl: string = "";
  rounds: number = 0;

  // Test function to verify TMDB API integration

  testApi(): void {
    this.triviaApi.getMovieByTitle("A Man Called Otto")
      .subscribe(response => {
        console.log(response);
        this.movie = response.results[0];
        this.posterUrl = `https://image.tmdb.org/t/p/w500${response.results[0].poster_path}`;
        console.log('Poster URL:', this.posterUrl);
      });
  }

  ngOnInit() {
    this.gameData.loadMoviePool().subscribe(ids => {
    this.gameData.setMoviePool(ids);
    this.gameData.startNewGame(10);
    this.loadMovie();
    });

    const genres = this.gameData.getSelectedGenres();
    console.log("Genres in solo game:", genres);
    
  }

  async loadMovie() {
    this.movie = await this.gameData.getCurrentMovie();
    this.userInput = " ";
    this.result = " ";
  }

  getTotalRounds() {
    return this.gameData.getTotalRounds();
  }

  // GAME LOGIC
  next() {
    this.gameData.nextRound();
    if (this.gameData.getRound() < this.gameData.getTotalRounds()) {
      this.loadMovie();
    } else {
      console.log('Game over. Final score:', this.gameData.getScore());
    }
    this.reveal = false;
    this.hasAnswered = false;
  }

  addPoint() {
    this.gameData.addPoint();
    console.log('Point added! Current score:', this.gameData.getScore());
  }
  
  endGame() {
    this.router.navigate(['/endGame']);
  }

  checkAnswer() { 
    if (this.userInput.trim().toLowerCase() === this.movie.title.trim().toLowerCase()) {
      this.result = "Correct!";
      this.addPoint();
    } else {
      this.result = `Incorrect! The correct answer was: ${this.movie.title}`;
    }
    console.log(this.userInput.trim().toLowerCase());
    console.log(this.movie.title.trim().toLowerCase());
    this.hasAnswered = true;
    this.reveal = true;
  }


}


