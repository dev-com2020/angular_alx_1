import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { Product } from '../product';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { ProductsService } from '../products.service';
import { CartService } from 'src/app/cart/cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  // encapsulation: ViewEncapsulation.None
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDetailComponent implements OnInit,OnDestroy,OnChanges {
  @Input() name = ''
  @Output() bought = new EventEmitter<string>()
  @Input() product: Product | undefined
  product$: Observable<Product> | undefined

  constructor(private route: ActivatedRoute, 
    private productService: ProductsService,
  private cartService: CartService) {}

  ngOnInit(): void {
    this.product$ =this.route.paramMap.pipe(
      switchMap(params => {
        return this.productService.getProduct(Number(params.get('id')))
  }))
}

  ngOnDestroy(): void {
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    const product = changes['product']
    if (!product.isFirstChange()) {
    const oldValue = product.previousValue?.name
    const newValue = product.currentValue.name
    console.log(`Produkt zmieniony z ${oldValue} na ${newValue}`)
  }
}
  buy(product: Product) {
    this.cartService.addProduct(product)
  }

  get productName(): string {
    console.log(`GET ${this.name}`)
    return this.name
  }

}
