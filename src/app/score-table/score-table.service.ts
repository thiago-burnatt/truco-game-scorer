import { MessageService } from './message.service';
import { EventEmitter, Injectable } from "@angular/core";
import { WinningCounterService } from '../winning-counter/winning-counter.service';

@Injectable()
export class ScoreTableService{
  scoreP1Changed = new EventEmitter<number>();
  winCounter1Changed = new EventEmitter<number>();
  scoreP2Changed = new EventEmitter<number>();
  winCounter2Changed = new EventEmitter<number>();
  msgInfoChanged = new EventEmitter<string>();

  scoringP1: number;
  scoringP2: number;
  messageInfo: string;
  winningCounter1: number = 0;
  winningCounter2: number = 0;

  constructor(
    private message: MessageService,
    private winningCounter: WinningCounterService) {}

    showScoringP1(id: number) {
      this.scoringP1 = (id);
      if (this.scoringP1 === 12) {
        this.winCounter1Changed.emit(this.winningCounter1 += this.winningCounter.playerCounter());
      }

      this.scoreP1Changed.emit(this.scoringP1);
    }

    showScoringP2(id: number) {
      this.scoringP2 = (id);
      if (this.scoringP2 === 12) {
        this.winCounter2Changed.emit(this.winningCounter2 += this.winningCounter.playerCounter());
      }

      this.scoreP2Changed.emit(this.scoringP2);
    }

    reset() {
      this.winningCounter1 = 0;
      this.winningCounter2 = 0;
      this.winCounter1Changed.emit(this.winningCounter1)
      this.winCounter2Changed.emit(this.winningCounter2);
    }

  // showScoringP1(id: number, playerName: string) {
  //   this.scoringP1 = (id);
  //   if (this.scoringP1 === 11) {
  //     this.messageInfo = this.message.scoreEleven(playerName);
  //   }
  //   if (this.scoringP1 === 12) {
  //     this.messageInfo = this.message.winningMessage(playerName);
  //     this.winningCounter1 += this.winningCounter.playerCounter();

  //     this.winningCounter.testCounter(playerName);

  //   }
  //   if (this.scoringP1 === 11 && this.scoringP2 === 11) {
  //     this.messageInfo = this.message.drawMessage();
  //   }
  // }

  // showScoringP2(id: number, playerName: string) {
  //   this.scoringP2 = id;
  //   if (this.scoringP2 === 11) {
  //     this.messageInfo = this.message.scoreEleven(playerName);
  //   }
  //   if (this.scoringP2 === 12) {
  //     this.messageInfo = this.message.winningMessage(playerName);
  //     this.winningCounter2 += this.winningCounter.playerCounter();

  //   }
  //   if (this.scoringP1 === 11 && this.scoringP2 === 11) {
  //     this.messageInfo = this.message.drawMessage();
  //   }
  // }

}
