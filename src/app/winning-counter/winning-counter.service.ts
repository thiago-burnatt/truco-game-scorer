import { EventEmitter, Injectable } from "@angular/core";

@Injectable()
export class WinningCounterService {
  player1Changed = new EventEmitter<number>()
  player1Name = new EventEmitter<string>()
  player1: number = 0;
  playerName: string;

  playerCounter(): number {
    return 1;
  }

  testCounter(playerName: string) {
    this.player1++;
    this.playerName = playerName;
    this.player1Changed.emit(this.player1);
    this.player1Name.emit(this.playerName);
  }
}
