import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { ProductDetailComponent } from '../product-detail/product-detail.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements AfterViewInit {
 suma = 1 + 1
 selectedProduct = 'Nie wybrano'
 @Input() inputValue = ''

 @ViewChild(ProductDetailComponent) productDetail: ProductDetailComponent | undefined

 onBuy(name: string) {
  window.alert(`Zakupiłeś ${name}!`)
 }

 ngAfterViewInit(): void {
   if (this.productDetail){
    console.log(this.productDetail.name)
   }
 }

 isInvalid(inputValue: string):boolean{
    return inputValue.length < 3
 }
}
