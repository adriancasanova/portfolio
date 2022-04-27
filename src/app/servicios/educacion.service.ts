import { Injectable } from '@angular/core';
import { Educacion } from '../educacion';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {map} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'content-type': 'application/json',
  }),
};


@Injectable({
  providedIn: 'root'
})
export class EducacionService {

 // private apiUrl: string = 'http://localhost:5000/educaciones';
 private apiUrl: string = 'http://localhost:8080/portfolio/educaciones/';
//private apiUrl: string = 'http://localhost:8080/admin/delete/educaciones';

constructor(private http: HttpClient) {}

 
postEducacion(educacion: Educacion) {
  return this.http.post<Educacion[]>(this.apiUrl, educacion)
  .pipe(map((res: any) => {
    return res; 
  }))
}

getsEducacion() {
  return this.http.get<Educacion[]>(this.apiUrl)
  .pipe(map((res: any) => {
    return res; 
  }))
}

updateEducacion(educacion: Educacion, id: number) {
  return this.http.put<Educacion[]>(this.apiUrl + id, educacion)
  .pipe(map((res: any) => {
    return res; 
  
  }))
}

deleteEducacion(id: number) {
  return this.http.delete<Educacion[]>(this.apiUrl + id)
  .pipe(map((res: any) => {
    return res; 
  }))
  console.log("El delete fue exitoso")
}





}