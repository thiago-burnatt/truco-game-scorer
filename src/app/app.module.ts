import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { MessageService } from './score-table/message.service';
import { ScoreTableComponent } from './score-table/score-table.component';
import { ScoreTableService } from './score-table/score-table.service';
import { WinningCounterComponent } from './winning-counter/winning-counter.component';
import { WinningCounterService } from './winning-counter/winning-counter.service';

@NgModule({
  declarations: [
    AppComponent,
    ScoreTableComponent,
    WinningCounterComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ScoreTableService, MessageService, WinningCounterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
