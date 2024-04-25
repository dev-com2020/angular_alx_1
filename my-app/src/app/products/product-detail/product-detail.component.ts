import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, ViewEncapsulation } from '@angular/core';

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

  constructor() {
    console.log(`Produkt ${this.name} w konstruktorze`)
  }

  ngOnInit(): void {
    console.log(`Produkt ${this.name} w OnInit`)
  }
  ngOnDestroy(): void {
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    const product = changes['name']
    if (!product.isFirstChange()) {
    const oldValue = product.previousValue
    const newValue = product.currentValue
    console.log(`Produkt zmieniony z ${oldValue} na ${newValue}`)
  }
}




  buy() {
    this.bought.emit(this.name)
  }

  get productName(): string {
    console.log(`GET ${this.name}`)
    return this.name
  }

}
