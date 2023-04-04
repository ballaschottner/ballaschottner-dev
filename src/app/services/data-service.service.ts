import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private dataUrl = 'assets/data.json';

  constructor(private http: HttpClient) {}

  getData(id: number): Observable<any> {
    console.log(id);
    return this.http.get<any[]>(this.dataUrl)
    .pipe(
      map(works => works.find(work => work.id === id))
    );
  }

  getWorks(): Observable<any> {
    return this.http.get<any>(this.dataUrl);
  }
}