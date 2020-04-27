import { Injectable } from "@angular/core";
import { Product } from "./product.model";
import { Observable } from "rxjs";
import { from } from "rxjs";

@Injectable()
export class StaticDataSource {
  private products: Product[] = [
    new Product(1, "Product 1", "Category 1", "bla 1", 100),
    new Product(2, "Product 2", "Category 1", "bla 2", 100),
    new Product(3, "Product 3", "Category 1", "bla 4", 100),
    new Product(4, "Product 4", "Category 1", "bla 8", 100),
    new Product(5, "Product 5", "Category 1", "bla 16", 100),
    new Product(6, "Product 6", "Category 2", "bla 32", 100),
    new Product(7, "Product 7", "Category 2", "bla 64", 100),
    new Product(8, "Product 8", "Category 2", "bla 128", 100),
    new Product(9, "Product 9", "Category 2", "bla 256", 100),
    new Product(10, "Product 10", "Category 2", "bla 512", 100),
    new Product(11, "Product 11", "Category 3", "bla 1024", 100),
    new Product(12, "Product 12", "Category 3", "bla 2048", 100),
    new Product(13, "Product 13", "Category 3", "bla 4096", 100),
    new Product(14, "Product 14", "Category 3", "bla 8192", 100),
    new Product(15, "Product 15", "Category 3", "bla 16384", 100),
  ];

  getProducts(): Observable<Product[]> {
    return from([this.products]);
  }
}