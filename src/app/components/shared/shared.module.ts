import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManufacturersComponent } from './manufacturers/manufacturers.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsComponent } from './products/products.component';
import { SpecificProductComponent } from './specific-product/specific-product.component';
import { StorageUnitsComponent } from './storage-units/storage-units.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    ManufacturersComponent,
    NavMenuComponent,
    FooterComponent,
    ProductsComponent,
    SpecificProductComponent,
    StorageUnitsComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    NgbModule,
  ],
  exports:[
    ManufacturersComponent,
    NavMenuComponent,
    FooterComponent,
    ProductsComponent,
    StorageUnitsComponent
  ]
})
export class SharedModule { }
