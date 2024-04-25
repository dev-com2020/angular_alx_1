import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getProducts(): Product[] {
    return [
  {name:'kurs Angular',
    price: 50,
   },
  {name:'kurs React',
    price: 60,
   },
  {name:'kurs Vue',
    price: 70,
  }
    ];
}
}
