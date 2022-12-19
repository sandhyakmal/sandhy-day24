import { Component, OnInit } from '@angular/core';
import { catchError } from 'rxjs';
import { Calculator } from './interfaces/calculator';
import { DataEmit } from './interfaces/data-emit';
import { IPost } from './interfaces/i-post';
import { IProduct } from './interfaces/i-product';
import { InterfacePost } from './interfaces/interface-post';
// import { Product } from './models/product';
import { BaseHttpService } from './services/base-http.service';
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

  initialCount: number = 10;

  counting(){
    this.initialCount++;
  }

  total = 0;
  onTotal(dataEmit:Calculator):void{
  this.total = dataEmit.a + dataEmit.b;
    console.log(this.total);
  }

  antrian: string[] = []
  onAntrianBerubah(dataEmit:any):void{
    console.log("parent: ",dataEmit.antrian);
  }

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

   ngOnInit(): void {

  }



  }

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
