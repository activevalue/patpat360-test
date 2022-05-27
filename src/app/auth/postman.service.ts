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
import { Observable, of, throwError } from 'rxjs';
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
    const credentials: any = <string>localStorage.getItem('credentials');
    try {
      const credentialsObj = JSON.parse(credentials);
      const httpHeaders = new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + credentialsObj.access_token,
      });

      return this._http.get(this.baseUrl + url, { headers: httpHeaders });
    } catch (error) {
      return of(null);
    }
  }

  post(url: string, payload: any) {
    return this._http.post(this.baseUrl + url, payload);
  }
}
