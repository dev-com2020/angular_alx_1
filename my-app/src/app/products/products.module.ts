import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { FormsModule } from '@angular/forms';
import { FormatDatePipe } from './format-date.pipe';
import { CopyrightDirective } from './copyright.directive';
import { FavoritesComponent } from './favorites/favorites.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductCreateComponent } from './product-create/product-create.component';



@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    FormatDatePipe,
    CopyrightDirective,
    FavoritesComponent,
    ProductViewComponent,
    ProductCreateComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [ProductListComponent]
})
export class ProductsModule { }
