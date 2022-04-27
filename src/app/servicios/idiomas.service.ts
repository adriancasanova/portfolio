import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Idiomas } from '../idiomas';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class IdiomasService {
 // private apiUrl: string = 'http://localhost:5000/idiomas';
 private apiUrl: string = 'http://localhost:8080/portfolio/idiomas/';
 constructor(private http: HttpClient) {}

  getIdiomas(): Observable<Idiomas[]> {
    return this.http.get<Idiomas[]>(this.apiUrl);
  }
}
