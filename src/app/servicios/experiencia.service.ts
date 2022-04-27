import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EXPERIENCIA } from '../mock';
import { Experiencia } from 'src/app/experiencia';
import { Observable, of } from 'rxjs';
import {map} from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders({
    'content-type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class ExperienciaService {
 // private apiUrl: string = 'http://localhost:5000/experiencias/';
 private apiUrl: string = 'http://localhost:8080/portfolio/experiencias/';
 constructor(private http: HttpClient) {}

 /* getExperiencia(): Observable<Experiencia[]> {
    return this.http.get<Experiencia[]>(this.apiUrl);
  }

  eliminarExperiencia(experiencia: Experiencia): Observable<Experiencia> {
    const url = `${this.apiUrl}/${experiencia.id}`;
    return this.http.delete<Experiencia>(url);
  }

  actualizarExperiencia(experiencia: Experiencia): Observable<Experiencia> {
    const url = `${this.apiUrl}/${experiencia.id}`;
    return this.http.put<Experiencia>(url, experiencia, httpOptions);
  }

  addExperiencia(experiencia: Experiencia): Observable<Experiencia> {
    return this.http.post<Experiencia>(this.apiUrl, experiencia, httpOptions);
  }

  experienciaGet(experiencia: Experiencia): Observable<Experiencia[]> {
    const url = `${this.apiUrl}/${experiencia.id}`;
    return this.http.get<Experiencia[]>(this.apiUrl);
  }
  */

  // Segunda solucion

postExperiencia(experiencia: Experiencia) {
  return this.http.post<Experiencia[]>(this.apiUrl, experiencia)
  .pipe(map((res: any) => {
    return res; 
  }))
}

getsExperiencia() {
  return this.http.get<Experiencia[]>(this.apiUrl)
  .pipe(map((res: any) => {
    return res; 
  }))
}

updateExperiencia(experiencia: Experiencia, id: number) {
  return this.http.put<Experiencia[]>(this.apiUrl + id, experiencia)
  .pipe(map((res: any) => {
    return res; 
  
  }))
}

deleteExperiencia(id: number) {
  return this.http.delete<Experiencia[]>(this.apiUrl + id)
  .pipe(map((res: any) => {
    return res; 
  }))
}




}
