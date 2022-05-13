import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Soft } from '../soft';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SoftService {
 //private apiUrl: string = 'http://localhost:8080/portfolio/softs/';
 private apiUrl: string = 'https://portfolioargentinaprograma.herokuapp.com/portfolio/softs/';
 constructor(private http: HttpClient) {}

  getSoft(): Observable<Soft[]> {
    return this.http.get<Soft[]>(this.apiUrl);
  }
}