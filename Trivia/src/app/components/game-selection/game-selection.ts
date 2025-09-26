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

  constructor(private router: Router, private gameData: GameDataService) {}

  rounds: number = 1;  

  onGenreChange(event: Event) {
    const checkbox = event.target as HTMLInputElement;
    const genreId = +checkbox.value;

    let genres = this.gameData.getSelectedGenres();

    if (checkbox.checked) {
      genres.push(genreId);
    } else {
      genres = genres.filter(id => id !== genreId);
    }

    this.gameData.setSelectedGenres(genres);
  }

  startGame() {
    this.gameData.setRounds(this.rounds);
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
