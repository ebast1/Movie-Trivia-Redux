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
    // this.triviaApi.getMovieByTitle("A Man Called Otto")
    //   .subscribe(response => {
    //     console.log(response);
    //     this.movie = response.results[0];
    //     this.posterUrl = `https://image.tmdb.org/t/p/w500${response.results[0].poster_path}`;
    //     console.log('Poster URL:', this.posterUrl);
    //   });

    this.triviaApi.getMovieByGenre().subscribe((res: any) => {
      const totalPages = Math.min(res.total_pages, 500);
      const randomPage = Math.floor(Math.random() * totalPages) + 1;

      this.triviaApi.getMovieByGenre().subscribe((pageRes: any) => {
        const movies = pageRes.results;
        const randomIndex = Math.floor(Math.random() * movies.length);
        const randomMovie = movies[randomIndex];
        this.movie = randomMovie;
        console.log(this.movie);
      });
    });

  }

  ngOnInit() {
    this.gameData.startNewGame();
    this.loadMovie();
    const genres = this.gameData.getSelectedGenres();
  }

  async loadMovie() {
    this.triviaApi.getMovieByGenre().subscribe((res: any) => {
      const totalPages = Math.min(res.total_pages, 500);
      const randomPage = Math.floor(Math.random() * totalPages) + 1;

      this.triviaApi.getMovieByGenre().subscribe((pageRes: any) => {
        const movies = pageRes.results;
        const randomIndex = Math.floor(Math.random() * movies.length);
        const randomMovie = movies[randomIndex];
        this.movie = randomMovie;
        console.log(this.movie);
      });
    });
  }

  getTotalRounds() {
    return this.gameData.getTotalRounds();
  }

  next() {
    this.gameData.nextRound();
    if (this.gameData.getRound() < this.gameData.getTotalRounds()) {
      this.loadMovie();
    }
    this.reveal = false;
    this.hasAnswered = false;
    
    this.userInput = "";
    this.result = "";
  }

  addPoint() {
    this.gameData.addPoint();
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


