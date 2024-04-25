import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { FormsModule } from '@angular/forms';
import { FormatDatePipe } from './format-date.pipe';



@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    FormatDatePipe
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [ProductListComponent]
})
export class ProductsModule { }
