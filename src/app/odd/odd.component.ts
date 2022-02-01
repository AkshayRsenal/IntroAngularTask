import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent implements OnInit {

  constructor() { }
  @Input() oddCountPointer: number = 0;
  ngOnInit(): void {
  }

}
