import { Injectable } from '@angular/core';
import {
  HttpClientModule,
  HttpClient,
  HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from '../users';
const httpOptions = {
  headers: new HttpHeaders({
    'content-type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private apiUrl: string = 'http://localhost:5000/users';
  constructor(private http: HttpClient) {}

  

  loginA(): Observable<Users[]> {
    return this.http.get<Users[]>(this.apiUrl);
  }
}
