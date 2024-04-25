import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { Product } from '../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements AfterViewInit {
 suma = 1 + 1
 selectedProduct: Product | undefined
 @Input() inputValue = ''
 today = new Date()

 products: Product[] = [
  {name:'kurs Angular',
    price: 50,
   },
  {name:'kurs React',
    price: 60,
   },
  {name:'kurs Vue',
    price: 70,
  }]

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
