import { Component, OnInit } from '@angular/core';
import { IMenu } from '../../interfaces/i-menu';

@Component({
  selector: 'app-menu-app',
  templateUrl: './menu-app.component.html',
  styleUrls: ['./menu-app.component.css']
})
export class MenuAppComponent implements OnInit {

  menus: IMenu[] = [];
  menu: IMenu;
  pajakPPN:number = 11/100;
  price:number= 0;
  hasil:number = 0;
  bayar:number = 0;


  constructor() {
    this.menu = {
      name: "",
      harga: 0,
      qty: 0,
      subtotal:0
    }
  }

  ngOnInit(): void {
  }

  addMenu(){
    let temp: IMenu = {
      name: this.menu.name,
      harga: this.menu.harga,
      qty: this.menu.qty,
      subtotal: this.menu.qty
    }

    this.menus.push(temp);
    this.price = 0;
    this.calculate();
  }

  private calculate(): void{
    for (let i in this.menus){
      this.price += (this.menus[i].harga * this.menus[i].qty);
    }
  }

  remove(index:number){
    this.menus.splice(index, 1);
    this.price = 0;
    this.calculate();
  }

  statusPembayaran:boolean = false

  hitung(){
    if (this.bayar < ((this.price * this.pajakPPN) + this.price)){
      this.statusPembayaran = false;
    } else {
      this.hasil = this.bayar - ((this.price * this.pajakPPN) + this.price);
      this.statusPembayaran = true;
    }
  }

  enter($event:any): void{
    if($event.which === 13 ){
      if (this.bayar < ((this.price * this.pajakPPN) + this.price)){
        this.statusPembayaran = false;
      } else {
        this.hasil = this.bayar - ((this.price * this.pajakPPN) + this.price);
        this.statusPembayaran = true;
      }
    }
  }

}
