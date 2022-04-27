import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Hard } from '../hard';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class HardService {

 // private apiUrl: string = 'http://localhost:5000/hards';
 private apiUrl: string = 'http://localhost:8080/portfolio/hards/';
 constructor(private http: HttpClient) {}

  getHard(): Observable<Hard[]> {
    return this.http.get<Hard[]>(this.apiUrl);
  }
}
