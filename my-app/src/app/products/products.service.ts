import { Injectable } from '@angular/core';
import { Product } from './product';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  private products = [
    {name:'kurs Angular',
    price: 50,
   },
  {name:'kurs React',
    price: 60,
   },
  {name:'kurs Vue',
    price: 70,
  }
  ]

  getProducts(): Observable<Product[]> {
    return of(this.products)
}
}
