import { Component, Host, OnInit, Optional } from '@angular/core';
import { Product } from '../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit{
  products: Product[] = []
  constructor(private productService: ProductsService) {
  }

  private getProducts() {
    this.productService.getProducts().subscribe((products) => {
      this.products = products
    })
  }
  ngOnInit(): void {
    this.getProducts()
  }
  

}
