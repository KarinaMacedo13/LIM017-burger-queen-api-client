import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BdUserService {
  url = "https://run.mocky.io/v3/dee25169-9635-4868-88aa-553093be8dd6";
  constructor(private http: HttpClient) { }

  getBdUserService(): Observable<any> {
    return this.http.get(this.url);
  }
}
