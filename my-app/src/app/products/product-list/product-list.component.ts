import { AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { Product } from '../product';
import { ProductsService } from '../products.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ProductsService]
})
export class ProductListComponent implements AfterViewInit, OnInit, OnDestroy {

 suma = 1 + 1
 selectedProduct: Product | undefined
 @Input() inputValue = ''
 today = new Date()
 private productSub: Subscription | undefined
 products$ : Observable<Product[]> | undefined

 constructor(private productService: ProductsService) {
  }

private getProducts() {
//  this.productSub = this.productService.getProducts().subscribe((products) => {
//    this.products = products
//  })
this.products$ = this.productService.getProducts()
}

ngOnDestroy(): void {
  this.productSub?.unsubscribe()
}

ngOnInit(): void {
  this.getProducts()
 
}

onAdd(product: Product) {
  this.products.push(product)
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
