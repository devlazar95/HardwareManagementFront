import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpResponse, HttpHeaderResponse, HttpHeaders } from "@angular/common/http";
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
@Injectable()
export class StorageUnitService {

  constructor(private readonly _httpClient: HttpClient, private _apiService: ApiService) { }
  
    getAllStorageUnits(): Observable<any>{
      return this._apiService.get('api/storage-units');
    }

    // getStorageByID(productID: number): Observable<any>{
    //   return this._apiService.getByID(productID, 'api/products')
    // }
}
