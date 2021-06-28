import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  private fetchData(url: string) {
    return this.http.get<HttpService>(url);
  }

  prepareDataRequest(url: string): Observable<any> {
    // Define the data URL
    const dataUrl = 'http://192.168.1.112:3000/' + url;
    // Prepare the request
    return this.fetchData(dataUrl);
  }
}
