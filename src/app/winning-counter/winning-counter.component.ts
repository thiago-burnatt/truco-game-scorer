import { Component, OnInit } from '@angular/core';
import { WinningCounterService } from './winning-counter.service';

@Component({
  selector: 'app-winning-counter',
  templateUrl: './winning-counter.component.html',
  styleUrls: ['./winning-counter.component.css']
})
export class WinningCounterComponent implements OnInit {
  winningCounter1: number = 0;
  winningCounter2: number = 0;

  playerName: string;

  constructor(private winningCounter: WinningCounterService) { }

  ngOnInit(): void {
    this.winningCounter.player1Changed
      .subscribe(
        (counter) => {
          this.winningCounter1 = counter;
        }
      )
    this.winningCounter.player1Name
      .subscribe(
        (name) => {
          this.playerName = name;
        }
    )

    // this.setProperties();
  }

  setProperties() {
    // this.winningCounter.winningCounter1 = this.winningCounter1
    // this.winningCounter2 = this.winningCounter.winningCounter2;
    // this.winningCounter.test = this.test;

  }

}
