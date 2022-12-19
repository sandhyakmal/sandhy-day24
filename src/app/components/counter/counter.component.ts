import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  @Input() count:number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  increment(){
    this.count++;
  }

  decrement(){
    this.count--;
  }

}
