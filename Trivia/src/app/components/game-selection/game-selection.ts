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

  // Default values for game settings
  username: string = 'Player1';
  color: string = '#ff0000';

  // Not sure which one yet array or int for multiple players
  players: string[] = [];
  numPlayers: number = 1;

  rounds: number = 3;
  difficulty: string = 'easy';
  genre: string = 'action';
  timeLimit: number = 30;
  questionType: string = 'multiple-choice';
  
  constructor(private router: Router, private gameDataService: GameDataService) {}

  // HTML Input Element References // Get references to the input elements in the HTML
  usernameInput: HTMLInputElement = document.getElementById('username') as HTMLInputElement;
  colorInput: HTMLInputElement = document.getElementById('color') as HTMLInputElement;
  playerInput: HTMLInputElement = document.getElementById('numPlayers') as HTMLInputElement;
  roundsInput: HTMLInputElement = document.getElementById('numRounds') as HTMLInputElement;
  difficultyInput: HTMLInputElement = document.getElementById('difficulty') as HTMLInputElement;
  genreInput: HTMLInputElement = document.getElementById('genre') as HTMLInputElement;
  timeInput: HTMLInputElement = document.getElementById('timeLimit') as HTMLInputElement;
  questionTypeInput: HTMLInputElement = document.getElementById('questionType') as HTMLInputElement;

  startGame() {
    this.gameDataService.setGameData({

    // Set the game data based on user selections, send the information to the GameDataService

      username: this.username,
      color: this.color,
      numPlayers: this.numPlayers,
      // players: this.players, // Not implemented yet
      rounds: this.rounds,
      difficulty: this.difficulty,
      genre: this.genre,
      timeLimit: this.timeLimit,
      questionType: this.questionType,

    });

    // Confirmation logs
    console.log("Game data has been set in GameDataService.");
    console.log("Username: " + this.username + ", Color: " + this.color);
    console.log("Number of Players: " + this.numPlayers);
    // console.log("Players: " + this.players); // Not implemented yet
    console.log("Rounds: " + this.rounds + ", Genre: " + this.genre);
    console.log("Difficulty: " + this.difficulty + ", Time Limit: " + this.timeLimit + " seconds");
    console.log("Question Type: " + this.questionType);

    // Navigate to the Solo Game Component
    this.router.navigate(['/soloGame']);
  }

  addRound() {
    if (this.rounds < 10) {
      this.rounds++;
      this.roundsInput.value = this.rounds.toString();
    }
  }

  removeRound() {
    if (this.rounds > 1) {
      this.rounds--;
      this.roundsInput.value = this.rounds.toString();
    }
  }

}
