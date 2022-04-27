import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { About } from '../about';


@Injectable({
  providedIn: 'root'
})
export class AboutService {
 // private apiUrl: string = 'http://localhost:5000/abouts/';
 private apiUrl: string = 'http://localhost:8080/portfolio/abouts/';
 constructor(private http: HttpClient) {}



 /* actualizarAbout(about: About): Observable<About[]> {
    const url = `${this.apiUrl}/${about.id}`;
    return this.http.put<About[]>(url, about, httpOptions);
  } */

/* Esto es parte del otro video de crud */

postAbout(about: About) {
  return this.http.post<About[]>(this.apiUrl, about)
  .pipe(map((res: any) => {
    return res; 
  }))
}

getsAbout() {
  return this.http.get<About[]>(this.apiUrl)
  .pipe(map((res: any) => {
    return res; 
  }))
}

updateAbout(about: About, id: number) {
  return this.http.put<About[]>(this.apiUrl + id, about)
  .pipe(map((res: any) => {
    return res; 
  
  }))
}

deleteAbout(id: number) {
  return this.http.delete<About[]>(this.apiUrl + id)
  .pipe(map((res: any) => {
    return res; 
  }))
}


}