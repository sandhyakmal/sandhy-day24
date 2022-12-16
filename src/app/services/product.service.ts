import { Product } from "../models/product";

export class ProductService {
    public getProducts(): Product[]{
        let products: Product[] = [
            new Product(1, "https://via.placeholder.com/150/92c95"),
            new Product(2, "https://via.placeholder.com/150/92c95"),
            new Product(3, "https://via.placeholder.com/150/92c95"),
        ];

        return products;
    }
}