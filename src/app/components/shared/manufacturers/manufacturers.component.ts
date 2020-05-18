import { Component, OnInit } from '@angular/core';
import { ManufacturerService } from 'src/app/services/manufacturer.service';

@Component({
  selector: 'app-manufacturers',
  templateUrl: './manufacturers.component.html',
  styleUrls: ['./manufacturers.component.scss']
})
export class ManufacturersComponent implements OnInit {

  manufacturers: any;
  constructor(private readonly _manService: ManufacturerService) { }

  ngOnInit() {
    this.init();
  }

  async init(){
    await this._manService.getAllManufacturers().toPromise().then((res)=>{
      this.manufacturers = res;
      console.log(res);
    })
  }

}
