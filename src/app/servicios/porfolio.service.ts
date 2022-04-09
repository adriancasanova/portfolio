import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PorfolioService {
  //url:String="http://localhost:8080/portfolio";

  constructor(private http: HttpClient) {}
  /*
  obtenerDatos(): Observable<any> {
 return this.http.get(this.url + "/about")  
}
obtenerDatosBanner(): Observable<any> {
  return this.http.get(this.url + "/banner")  
}

obtenerDatosEducacion(): Observable<any> {
  return this.http.get(this.url + "/educacion")  
}

obtenerDatosExperiencia(): Observable<any> {
  return this.http.get(this.url + "/experiencia")  
}
obtenerDatosSkills(): Observable<any> {
  return this.http.get<any>(this.url + "/skills")  
} 
*/
  obtenerDatos(): Observable<any> {
    return this.http.get<any>('./assets/data/data.json');
  }
}
