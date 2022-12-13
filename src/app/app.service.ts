import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private http: HttpClient) {}

  loadData() {
    return this.http.get<any>(`http://localhost:3000/movies`).pipe(
      map((response) => {
        return response;
      })
    );
  }
}
