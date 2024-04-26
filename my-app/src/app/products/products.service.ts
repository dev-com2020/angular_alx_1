import { Injectable } from '@angular/core';
import { Product } from './product';
import { Observable, map, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

interface ProductDTO {
  id: number;
  title: string;
  price: number;
}

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private productsUrl = 'https://fakestoreapi.com/products';

  constructor(private http: HttpClient) {}

  // private products = [
  //   {name:'kurs Angular',
  //   price: 50,
  //  },
  // {name:'kurs React',
  //   price: 60,
  //  },
  // {name:'kurs Vue',
  //   price: 70,
  // }
  // ]

  getProducts(): Observable<Product[]> {
    return this.http.get<ProductDTO[]>(this.productsUrl).pipe(
      map(products =>
        products.map(product => {
          return {
            name: product.title,
            price: product.price,
          };
        })
      )
    );
  }

  addProduct(name:string,price:number):Observable<Product>{
    return this.http.post<ProductDTO>(this.productsUrl,{
      title:name,
      price:price
    }).pipe(
      map(product => {
        return {
          name: product.title,
          price: product.price,
        };
      })
    );
  }
}






// getProducts(): Observable<Product[]> {
//   return this.http.get<ProductDTO[]>(this.productsUrl).pipe(
//     map(products => products.map(({ title: name, price }) => ({ name, price })))
//   );
// }
