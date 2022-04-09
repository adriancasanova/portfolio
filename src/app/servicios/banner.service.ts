import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Banner } from 'src/app/banner';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class BannerService {
  private apiUrl: string = 'http://localhost:5000/banners';
  constructor(private http: HttpClient) {}

  getBanner(): Observable<Banner[]> {
    return this.http.get<Banner[]>(this.apiUrl);
  }

  actualizarBanner(banner: Banner): Observable<Banner> {
    console.log(banner.id);
    const url = `${this.apiUrl}/${banner.id}`;
    return this.http.put<Banner>(url, banner);
  }
}
