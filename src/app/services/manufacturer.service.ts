import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpResponse, HttpHeaderResponse, HttpHeaders } from "@angular/common/http";
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
@Injectable()
export class ManufacturerService {

  constructor(private readonly _httpClient: HttpClient, private _apiService: ApiService) { }
  
    getAllManufacturers(): Observable<any>{
      return this._apiService.get('api/manufacturers');
    }
}
