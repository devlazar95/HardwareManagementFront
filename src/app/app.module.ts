import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { SharedModule } from './components/shared/shared.module';
import { ApiService } from './services/api.service';
import { ManufacturerService } from './services/manufacturer.service';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './services/product.service';
import { StorageUnitService } from './services/storage-unit.service';
import { ProductsPageComponent } from './components/products-page/products-page.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    HomeComponent,
    ProductsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    RouterModule,
    HttpClientModule,
    
  ],
  providers: [ApiService, ManufacturerService, ProductService, StorageUnitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
