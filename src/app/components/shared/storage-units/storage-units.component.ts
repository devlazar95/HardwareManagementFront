import { Component, OnInit } from '@angular/core';
import { StorageUnitService } from 'src/app/services/storage-unit.service';

@Component({
  selector: 'app-storage-units',
  templateUrl: './storage-units.component.html',
  styleUrls: ['./storage-units.component.scss']
})
export class StorageUnitsComponent implements OnInit {
  allStorageUnits: any = [];
  constructor(private _storageUnit: StorageUnitService) { }

  ngOnInit() {
    this.getAllStorageUnits();
  }

  async getAllStorageUnits(){
    this.allStorageUnits = await this._storageUnit.getAllStorageUnits().toPromise();
    console.log(this.allStorageUnits);
  }

}
