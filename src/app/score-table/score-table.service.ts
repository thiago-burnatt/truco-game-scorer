import { MessageService } from './message.service';
import { EventEmitter, Injectable } from "@angular/core";
import { WinningCounterService } from '../winning-counter/winning-counter.service';
import {
  calcularPrecoPrazo,
  consultarCep,
  rastrearEncomendas,
} from 'correios-brasil';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
  postData =
  {
    "SellerCEP": "89218002",
    "RecipientCEP": "89218000",
    "ShipmentInvoiceValue": 300,
    "ShippingServiceCode": null,
    "ShippingItemArray": [
      {
        "Height": 2,
        "Length": 33,
        "Quantity": 1,
        "Weight": 10,
        "Width": 10,
        "SKU": "IDW_54626",
        "Category": "Running"
      },
      {
        "Height": 15,
        "Length": 15,
        "Quantity": 1,
        "Weight": 0.5,
        "Width": 29
      }
    ],
    "RecipientCountry": "BR"
  }



  constructor(
    private message: MessageService,
    private winningCounter: WinningCounterService,
    private http: HttpClient) {}

    showScoringP1(id: number) {
      this.scoringP1 = (id);
      if (this.scoringP1 === 12) {
        this.winCounter1Changed.emit(this.winningCounter1 += this.winningCounter.playerCounter());
      }

      this.scoreP1Changed.emit(this.scoringP1);
    }

    postTest() {
      let headers = new HttpHeaders({
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'token': '538517D1RBCE4R4B36RBBC0R3C728CDB3611'});

      return this.http.post(
        'https://api.frenet.com.br/shipping/quote',
        this.postData, {headers: headers}
        );
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
