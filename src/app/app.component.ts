import { Component } from '@angular/core';
import { Calculator } from './interfaces/calculator';
import { DataEmit } from './interfaces/data-emit';
import { IPost } from './interfaces/i-post';
import { Product } from './models/product';
import { PostService } from './services/post.service';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

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
