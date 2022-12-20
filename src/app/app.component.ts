import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { catchError } from 'rxjs';
import { Calculator } from './interfaces/calculator';
import { DataEmit } from './interfaces/data-emit';
import { IIftttData } from './interfaces/i-ifttt-data';
import { INotifIfttt } from './interfaces/i-notif-ifttt';
import { IPost } from './interfaces/i-post';
import { IProduct } from './interfaces/i-product';
import { IProductWrapper } from './interfaces/i-product-wrapper';
import { InterfacePost } from './interfaces/interface-post';
// import { Product } from './models/product';
import { BaseHttpService } from './services/base-http.service';
import { IftttService } from './services/ifttt.service';
import { PostService } from './services/post.service';
import { ProductService } from './services/product.service';
import { ServPostService } from './services/serv-post.service';

class ProductModel implements IProduct{
  id!: number;
  title!: string;
  description!: string;
  price!: number;
  discountPercentage!: number;
  rating!: number;
  stock!: number;
  brand!: string;
  category!: string;
  thumbnail!: string;
  image!: string[];

}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  //------------------------Calculator-----------

  // initialCount: number = 10;

  // counting(){
  //   this.initialCount++;
  // }

  // total = 0;
  // onTotal(dataEmit:Calculator):void{
  // this.total = dataEmit.a + dataEmit.b;
  //   console.log(this.total);
  // }

  // antrian: string[] = []
  // onAntrianBerubah(dataEmit:any):void{
  //   console.log("parent: ",dataEmit.antrian);
  // }

  // -------------------------------------- get All Data HTTP

  // posts: InterfacePost[] = [];

  // constructor(private servePostservice: ServPostService){
  // }

  // ngOnInit(): void {
  //   this.servePostservice.getAllData()
  //   .subscribe(
  //     (response: InterfacePost[]) => {
  //       this.posts = response;
  //     }
  //   )
  // }

  // --------------------------------------------------------------------

  // product!: IProduct;

  // notification: INotifIfttt= {
  //   value1: ""
  // };

  // dataIFTTT: IIftttData = {
  //   event: "",
  //   key: ""
  // };

  // constructor(private iftttService: IftttService, private baseService: BaseHttpService){
  // }

  // public sendData(){
  //   this.iftttService.send(this.notification, this.dataIFTTT)
  //   .pipe(catchError(this.baseService.handleError))
  //   .subscribe(
  //     (response: any) => {
  //       // this.notification = response;
  //       // this.dataIFTTT = response;
  //       alert("Sukses input data");
  //     }
  //   )
  // }

  // ngOnInit(): void {\

  // }

  // -----------------------------------------------------------------

  product!: IProduct;

  constructor(private productService: ProductService, private baseService: BaseHttpService){
    this.product = new ProductModel();
  }

  public addProduct(){
    this.productService.create(this.product)
    .pipe(catchError(this.baseService.handleError))
    .subscribe(
      (response: IProduct) => {
        this.product = response;
        alert("Sukses input data");
      }
    )
  }

  productContainer: IProductWrapper | undefined;
  products: IProduct[] = [];

  public allProduct():void {
    this.productService.all(100, 10, "title,price,stock")
    .subscribe
      ((response: IProductWrapper)=>{
        this.productContainer = response;
        this.products = this.productContainer.products;
      })
  }

   ngOnInit(): void {
    this.allProduct();

  }

  // ------------------------------------------------------------------

  // posts: IPost[] = [];
  // products: Product[];
  // productService: ProductService;

  // constructor(private postService: PostService){
  //   // this.products= [];
  //   // this.productService = new ProductService();
  // }

  // ngOnInit(): void {
  //   // this.products = this.productService.getProducts();
  //   // this.posts = this.postService.getAllPost();
  // }

  // getProducts(){
    
  // }


  }


