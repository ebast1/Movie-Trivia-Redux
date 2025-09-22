import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-end-game-component',
  imports: [],
  templateUrl: './end-game-component.html',
  styleUrl: './end-game-component.css'
})
export class EndGameComponent {

  constructor(private router: Router) {}

  goToHome() {
    this.router.navigate(['/home']);
  }

  restartGame() {
    this.router.navigate(['/soloGame']);
  }

}
