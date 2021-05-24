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
    const dataUrl = 'https://random-data-api.com/api/' + url;
    // Prepare the request
    return this.fetchData(dataUrl);
  }
}
