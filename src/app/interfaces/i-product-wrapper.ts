import { IProduct } from "./i-product";

export interface IProductWrapper {
    products: IProduct[];
    total: number;
    skip: number;
    limit: number;
}
