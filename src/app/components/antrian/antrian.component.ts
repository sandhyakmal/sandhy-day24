import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataEmit } from 'src/app/interfaces/data-emit';

@Component({
  selector: 'app-antrian',
  templateUrl: './antrian.component.html',
  styleUrls: ['./antrian.component.css']
})
export class AntrianComponent implements OnInit {

  counter: number = 1;

  @Input()
    antrian: string[];
  
  @Output()
    onAntrianBerubah: EventEmitter<DataEmit> = new EventEmitter(); 

  constructor() {
    this.antrian = [];
   }

  ngOnInit(): void {
  }

  tambahAntrian():void{
    this.antrian.push(`Antrian ke ${this.counter++}`);
    this.onAntrianBerubah.emit({
      total: this.antrian.length,
      antrian: this.antrian
    });
  }

  kurangAntrian():void{
    this.antrian.pop();
    this.onAntrianBerubah.emit({
      total: this.antrian.length,
      antrian: this.antrian
    });
  }

}
