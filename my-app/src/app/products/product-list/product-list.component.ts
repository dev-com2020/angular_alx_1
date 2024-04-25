import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { Product } from '../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ProductsService]
})
export class ProductListComponent implements AfterViewInit, OnInit {

 suma = 1 + 1
 selectedProduct: Product | undefined
 @Input() inputValue = ''
 today = new Date()

 constructor(private productService: ProductsService) {
  }

ngOnInit(): void {
  this.products = this.productService.getProducts()
 
}


 products: Product[] = []

 @ViewChild(ProductDetailComponent) productDetail: ProductDetailComponent | undefined

 onBuy() {
  window.alert(`Zakupiłeś ${this.selectedProduct?.name}!`)
 }

 ngAfterViewInit(): void {
   if (this.productDetail){
    console.log(this.productDetail.product)
   }
 }

//  get trackByProducts() {
//   return (index: number, name: string) => {
//   return `${index}-${name}`
//   }


 isInvalid(inputValue: string):boolean{
    return inputValue.length < 3
 }
}
