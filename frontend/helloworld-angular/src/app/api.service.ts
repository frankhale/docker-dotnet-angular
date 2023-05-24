import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }

  getHello(srv: string): Observable<any> {
    const url = `${environment.apiBaseUrl}/${srv}/hello`;
    return this.http.get<any>(url);
  }

  getWorld(srv: string): Observable<any> {
    const url = `${environment.apiBaseUrl}/${srv}/world`;
    return this.http.get<any>(url);
  }

  getData(srv: string): Observable<any> {
    const url = `${environment.apiBaseUrl}/${srv}/data`;
    return this.http.get<any>(url);
  }
}
