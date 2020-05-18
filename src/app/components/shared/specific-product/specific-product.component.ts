import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-specific-product',
  templateUrl: './specific-product.component.html',
  styleUrls: ['./specific-product.component.scss']
})
export class SpecificProductComponent implements OnInit {

  productID: number;
  specificProduct: any = {};
  constructor(private route: ActivatedRoute, private readonly _productService: ProductService) { }

  ngOnInit() {
    if (this.route.snapshot.queryParamMap.get('productID')) {
      this.productID = parseInt(this.route.snapshot.queryParamMap.get('productID'));
      this.init();
    }
  }

  init(){
    this.getProductById();
  }

  async getProductById(){
    await this._productService.getProductByID(this.productID).toPromise().then((res)=>{
      this.specificProduct = res;
      console.log(res);
    }).catch((err)=>{
      console.log(err);
    })
  }

}
