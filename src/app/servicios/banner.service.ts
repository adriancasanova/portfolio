import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Banner } from 'src/app/banner';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class BannerService {
 // private apiUrl: string = 'http://localhost:5000/banners/';
 private apiUrl: string = 'http://localhost:8080/portfolio/banners/';
 constructor(private http: HttpClient) {}
  

  getsBanner() {
    return this.http.get<Banner[]>(this.apiUrl)
    .pipe(map((res: any) => {
      return res; 
    }))
  }

  updateBanner(banner: Banner, id: number) {
    return this.http.put<Banner[]>(this.apiUrl + id, banner)
    .pipe(map((res: any) => {
      return res; 
    
    }))
  }
}
