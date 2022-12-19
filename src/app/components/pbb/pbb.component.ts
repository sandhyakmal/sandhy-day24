import { Component } from '@angular/core';

@Component({
  selector: 'app-pbb',
  templateUrl: './pbb.component.html',
  styleUrls: ['./pbb.component.css']
})
export class PbbComponent {
luasTanah: number = 0;
luasBangunan: number = 0;
njopTanah: number = 0;
njopBangunan: number = 0;
pbb:number = 0; 

NJOPTKP = 12000000;
NJKP = 0.2;
PBBTerhutang = 0.005;
stimulus = 15000;

today: number = Date.now();

hitung(){
  let hargaTanah = this.luasTanah * this.njopTanah;
  let hargaBangunan = this.luasBangunan * this.njopBangunan;
  let hargaPBB = (hargaTanah + hargaBangunan) - this.NJOPTKP;
  let result = hargaPBB * this.NJKP;
  let hasil = result * this.PBBTerhutang;
  this.pbb = hasil - this.stimulus;
}

}
