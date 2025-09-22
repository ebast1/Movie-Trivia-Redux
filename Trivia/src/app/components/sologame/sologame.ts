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

  testApi(): void {
    this.triviaApi.searchMovie("A Man Called Otto")
      .then((data: any) => {
        this.movie = data;
        console.log("Movie fetched by ID:", data);
      })
      .catch((err: any) => {
        console.error('Error fetching movie by ID:', err);
      });
  }

  ngOnInit() {
    this.gameData.loadMoviePool().subscribe(ids => {
    this.gameData.setMoviePool(ids);
    this.gameData.startNewGame(10);
    this.loadMovie();
    });
  }

  async loadMovie() {
    this.movie = await this.gameData.getCurrentMovie();
    this.userInput = " ";
    this.result = " ";
  }

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
  
  /*
    revealAnswer() {
        this.reveal = !this.reveal;
    }
  */

  endGame() {
    // Navigate to end game component
    this.router.navigate(['/endGame']);
  }

  checkAnswer() { 
    if (this.userInput.trim().toLowerCase() === this.movie.Title.trim().toLowerCase()) {
      this.result = "Correct!";
      this.addPoint();
    } else {
      this.result = `Incorrect! The correct answer was: ${this.movie.Title}`;
    }
    console.log(this.userInput.trim().toLowerCase());
    console.log(this.movie.Title.trim().toLowerCase());
    this.hasAnswered = true;
    this.reveal = true;
  }

}
