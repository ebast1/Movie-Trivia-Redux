import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './homepage.html',
  styleUrls: ['./homepage.css']
})
export class Homepage {
  title = 'Trivia Night';

  leaderboard = [
    { name: 'Alice', score: 120 },
    { name: 'Bob', score: 95 },
    { name: 'Charlie', score: 80 },
    { name: 'Diana', score: 60 }
  ];

  goToSolo() {
    console.log("Solo button clicked!");
  }

  goToVersus() {
    console.log("Versus button clicked!");
  }
}
