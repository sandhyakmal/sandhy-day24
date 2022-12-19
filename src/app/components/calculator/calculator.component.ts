import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Calculator } from 'src/app/interfaces/calculator';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  merkCalculator: string = "DIY"

  @Input()
    a:number;
    b:number;
    jumlah:number;
  
  @Output()
    onTotal: EventEmitter<Calculator> = new EventEmitter(); 

  constructor() {
    // this.antrian = [];
    this.a = 0;
    this.b = 0;
    this.jumlah = 0;
   }

  ngOnInit(): void {
  }

  totalAngka(): void{
    this.jumlah = this.a + this.b;
    this.onTotal.emit({
      a: this.a,
      b: this.b
    });
  }

  getNumberEasy(){
    alert("Calculator baru nich");
  }

}
