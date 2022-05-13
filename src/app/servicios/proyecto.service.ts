import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Proyecto } from '../proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
 //private apiUrl: string = 'http://localhost:8080/portfolio/proyectos/';
 private apiUrl: string = 'https://portfolioargentinaprograma.herokuapp.com/portfolio/proyectos/'; 
 constructor(private http: HttpClient) {}

  getProyecto(): Observable<Proyecto[]> {
    return this.http.get<Proyecto[]>(this.apiUrl);
  }
}