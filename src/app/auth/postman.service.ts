import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpEvent,
  HttpResponse,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpParams,
  HttpHeaders,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from '@env/environment';

import { map, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class PostmanService {
  authHeader: any;

  baseUrl = environment.serverURI + 'api/';

  constructor(private _http: HttpClient, private router: Router) {}

  get(url: string) {
    return this._http.get(this.baseUrl + url);
  }

  post(url: string, payload: any) {
    return this._http.post(this.baseUrl + url, payload);
  }

  put(url: string, payload: any) {
    return this._http.put(this.baseUrl + url, payload);
  }

  delete(url: string) {
    return this._http.delete(this.baseUrl + url);
  }
}
