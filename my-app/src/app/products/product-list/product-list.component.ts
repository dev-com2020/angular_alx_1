import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
 suma = 1 + 1
 selectedProduct = ''

 onBuy(name: string) {
  window.alert(`Zakupiłeś ${name}!`)
 }
}
