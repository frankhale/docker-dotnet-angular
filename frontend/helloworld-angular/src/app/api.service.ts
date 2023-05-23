import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }

  getHello(srv: string): Observable<any> {
    const url = `https://localhost:8081/api/${srv}/hello`;
    return this.http.get<any>(url);
  }

  getWorld(srv: string): Observable<any> {
    const url = `https://localhost:8081/api/${srv}/world`;
    return this.http.get<any>(url);
  }

  getData(srv: string): Observable<any> {
    const url = `https://localhost:8081/api/${srv}/data`;
    return this.http.get<any>(url);
  }
}
