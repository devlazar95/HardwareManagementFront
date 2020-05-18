import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpResponse, HttpHeaderResponse, HttpHeaders } from "@angular/common/http";
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
@Injectable()
export class ProductService {

  constructor(private readonly _httpClient: HttpClient, private _apiService: ApiService) { }
  
    getAllProducts(): Observable<any>{
      return this._apiService.get('api/products');
    }
}
