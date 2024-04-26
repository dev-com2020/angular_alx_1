import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { Product } from '../product';
import { ActivatedRoute } from '@angular/router';
import { Observable, of, switchMap } from 'rxjs';
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
  @Input() id: number = -1

  constructor(private route: ActivatedRoute, 
    private productService: ProductsService,
  private cartService: CartService) {}

  ngOnInit(): void {
    this.product$ = this.route.data.pipe(
      switchMap(data => of(data['product'])
    ))
}

  ngOnDestroy(): void {
  }

  ngOnChanges(): void {
    this.product$ = this.productService.getProduct(this.id)
}
  buy(product: Product) {
    this.cartService.addProduct(product)
  }

  get productName(): string {
    console.log(`GET ${this.name}`)
    return this.name
  }

}
