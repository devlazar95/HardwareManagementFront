import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: any;
  constructor(private readonly _productService: ProductService) { }

  ngOnInit() {
    this.init();
  }


  async init(){
    await this._productService.getAllProducts().toPromise().then((res)=>{
      this.products = res;
      console.log(res);
    }).catch((err)=>{
      console.log(err);
    })
  }

}
