import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'componentsDataBinding';
  
  displayCountParities: Array<{category: string, pointer: number}>=[];

  tickerCounts: Array<string> = [];

  displayTimerParity(timerData: number) {
    this.displayCountParities.push({ category: "Start - Number" ,  pointer: timerData });

    if (timerData % 2 === 0) {
      console.log("even");
      this.displayCountParities.push({ category: "Even - Number" ,  pointer: timerData });
    } else {
      console.log("odd");
      this.displayCountParities.push({ category: "Odd - Number" ,  pointer: timerData });
    }

  }

}
