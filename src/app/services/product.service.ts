import { HttpClient, HttpContext, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IProduct } from "../interfaces/i-product";
import { IProductWrapper } from "../interfaces/i-product-wrapper";
import { BaseHttpService } from "./base-http.service";

@Injectable({
    providedIn: 'root'
})

export class ProductService {
    // public getProducts(): Product[]{
    //     let products: Product[] = [
    //         new Product(1, "https://via.placeholder.com/150/92c95"),
    //         new Product(2, "https://via.placeholder.com/150/92c95"),
    //         new Product(3, "https://via.placeholder.com/150/92c95"),
    //     ];

    //     return products;
    // }

    private endpoint: string = "products/add";

    constructor(private http: HttpClient, private baseHttp: BaseHttpService){ }

    public create(product: IProduct): Observable<IProduct>{
        const headers = {
            "Content-Type": "applicatiion/json"
        };
        const body = JSON.stringify(product);
        return this.http.post<IProduct>(
            `${this.baseHttp.baseURL}/${this.endpoint}`,
            body,
            {headers}
        );
    }

    public all(limit:number, skip: number, select:string): Observable<IProductWrapper>{
        let params: HttpParams = new HttpParams();
        params.set('limit', limit);
        params.set('skip', limit);
        params.set('skip', select);
        return this.http.get<IProductWrapper>(
            `${this.baseHttp.baseURL}/products`, {params}
        )
    }
}