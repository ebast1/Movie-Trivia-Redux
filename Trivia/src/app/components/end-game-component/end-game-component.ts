import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GameDataService } from '../../services/game-data-service';

@Component({
  selector: 'app-end-game-component',
  imports: [],
  templateUrl: './end-game-component.html',
  styleUrl: './end-game-component.css'
})
export class EndGameComponent {

  finalScore: number = 0;

  constructor(private router: Router, private gameData: GameDataService) {
    this.finalScore = this.gameData.getScore();
  }

  goToHome() {
    this.router.navigate(['/home']);
  }

  restartGame() {
    this.router.navigate(['/soloGame']);
  }

}
