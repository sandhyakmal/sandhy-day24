import { Component } from '@angular/core';

@Component({
  selector: 'app-galery',
  templateUrl: './galery.component.html',
  styleUrls: ['./galery.component.css']
})
export class GaleryComponent {

  tampilData(event:any){
    console.log(event)
    console.log("Data Ditampilkan")
  }

}
