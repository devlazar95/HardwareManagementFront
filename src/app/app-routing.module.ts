import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { HomeComponent } from './components/home/home.component';
import { SpecificProductComponent } from './components/shared/specific-product/specific-product.component';
import { StorageUnitsComponent } from './components/shared/storage-units/storage-units.component';
import { ProductsComponent } from './components/shared/products/products.component';
import { ProductsPageComponent } from './components/products-page/products-page.component';
import { ManufacturersComponent } from './components/shared/manufacturers/manufacturers.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: WelcomePageComponent
      }
    ]
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'specific-product',
    component: SpecificProductComponent
  },
  {
    path: 'storage-units',
    component: StorageUnitsComponent
  },
  {
    path: 'products',
    component: ProductsPageComponent
  },
  {
    path: 'manufacturers',
    component: ManufacturersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
