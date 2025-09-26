import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GameDataService } from '../../services/game-data-service';

@Component({
  selector: 'app-game-selection',
  imports: [],
  templateUrl: './game-selection.html',
  styleUrl: './game-selection.css'
})
export class GameSelection {

  rounds: number = 1;
  selectedGenres: number[] = [];
  
  constructor(private router: Router, private gameDataService: GameDataService) {}

  onGenreChange(event: Event) {
    const checkbox = event.target as HTMLInputElement;
    const genreId = +checkbox.value; // convert string to number

    if (checkbox.checked) {
      this.selectedGenres.push(genreId);
    } else {
      this.selectedGenres = this.selectedGenres.filter(id => id !== genreId);
    }

    // send updated genres to your service
    this.gameDataService.setSelectedGenres(this.selectedGenres);
  }

  startGame() {
    this.gameDataService.setRounds(this.rounds);
    console.log('Starting game with rounds:', this.rounds);
    console.log('Selected genres:', this.selectedGenres);
    this.router.navigate(['/soloGame']);
  }

  addRound() {
    if (this.rounds < 10) {
      this.rounds++;
    }
  }

  removeRound() {
    if (this.rounds > 1) {
      this.rounds--;
    }
  }

}
