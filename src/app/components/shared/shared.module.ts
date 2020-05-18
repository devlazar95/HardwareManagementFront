import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManufacturersComponent } from './manufacturers/manufacturers.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsComponent } from './products/products.component';
import { SpecificProductComponent } from './specific-product/specific-product.component';



@NgModule({
  declarations: [
    ManufacturersComponent,
    NavMenuComponent,
    FooterComponent,
    ProductsComponent,
    SpecificProductComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ManufacturersComponent,
    NavMenuComponent,
    FooterComponent,
    ProductsComponent
  ]
})
export class SharedModule { }
