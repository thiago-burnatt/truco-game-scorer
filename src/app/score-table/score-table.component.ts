import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, EventEmitter, OnInit } from '@angular/core';
import { MessageService } from './message.service';
import { ScoreTableService } from './score-table.service';

@Component({
  selector: 'app-score-table',
  templateUrl: './score-table.component.html',
  styleUrls: ['./score-table.component.css']
})
export class ScoreTableComponent implements OnInit {
  scores: number[] = [0,1,2,3,4,5,6,7,8,9,10,11,12];
  scoringP1: number;
  scoringP2: number;
  playerName1: string = '';
  playerName2: string = '';
  messageInfo: string;
  winningCounter1: number;
  winningCounter2: number;

  constructor(private scoreTable: ScoreTableService) {}

  ngOnInit(): void {
      this.scoreTable.scoreP1Changed.subscribe((score) => {this.scoringP1 = score;})
      this.scoreTable.winCounter1Changed.subscribe((winScore) => {this.winningCounter1 = winScore;})

      this.scoreTable.scoreP2Changed.subscribe((score) => {this.scoringP2 = score;})
      this.scoreTable.winCounter2Changed.subscribe((winScore) => {this.winningCounter2 = winScore;})

      this.scoreTable.msgInfoChanged.subscribe((msg) => {this.messageInfo = msg;})
  }

  p1Scoring(id: number) {
    this.scoreTable.showScoringP1(id);
  }

  p2Scoring(id: number) {
    this.scoreTable.showScoringP2(id)
  }

  onReset() {
    this.scoreTable.reset();
  }

  test(){
    // console.log(this.scoreTable.postTest());
    this.scoreTable.postTest().subscribe(data => {
      console.log(data)
    })
  }

}
