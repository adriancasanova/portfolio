import { Injectable } from '@angular/core';
import { Navbar } from '../navbar';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  //private apiUrl: string = 'http://localhost:5000/navbars/';
  private apiUrl: string = 'http://localhost:8080/portfolio/navbars/';
  constructor(private http: HttpClient) {}

 
  getsNavbar() {
    return this.http.get<Navbar[]>(this.apiUrl)
    .pipe(map((res: any) => {
      return res; 
    }))
  }

  updateNavbar(navbar: Navbar, id: number) {
    return this.http.put<Navbar[]>(this.apiUrl + id, navbar)
    .pipe(map((res: any) => {
      return res; 
    
    }))
  }

}
