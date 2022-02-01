import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output() started = new EventEmitter();
  ticker: number = 0;
  intervalTicker: any ;
  constructor() { }

  ngOnInit(): void {
  }

  onStart() {
    this.intervalTicker = setInterval(() => { this.started.emit(this.ticker++) }, 1000)
  }

  onStop(){
    clearInterval(this.intervalTicker);
  }
}
