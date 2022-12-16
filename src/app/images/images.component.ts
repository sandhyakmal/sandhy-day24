import { Component } from '@angular/core';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent {

  name:string = "";

  images:string[] = [
    "https://picsum.photos/200/300?random=1",
    "https://picsum.photos/200/300?random=2",
    "https://picsum.photos/200/300?random=3",
    "https://picsum.photos/200/300?",
  ];

  addImage(){
    let randomNumber: number = Math.floor(Math.random()* 60);
    this.images.push(`https://picsum.photos/200/300?random=${randomNumber}`);
  }

  gantiGambar(indeks: number, angkaRandom: number){
    this.images[indeks] = `https://picsum.photos/200/300?random=${angkaRandom}`
  }

}
