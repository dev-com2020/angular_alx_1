import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  // encapsulation: ViewEncapsulation.None
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDetailComponent {
  @Input() name = ''
  @Output() bought = new EventEmitter<string>()

  buy() {
    this.bought.emit(this.name)
  }

  get productName(): string {
    console.log(`GET ${this.name}`)
    return this.name
  }

}
