import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
url="http://localhost:8080/portfolio/users";
currentUserSubject: BehaviorSubject<any>;
  constructor(private http: HttpClient) { 
console.log("El servicio de autenticacion esta corriendo" );
this.currentUserSubject = new BehaviorSubject<any>(sessionStorage.getItem('currentUser')|| '{}');

}
  iniciarSesion(credenciales:any):Observable<any> {  
  return this.http.post(this.url, credenciales, { responseType: 'text' }).pipe(map(data =>{
    sessionStorage.setItem('currentUser', JSON.stringify(data));   
    this.currentUserSubject.next(data);      
    return data;   
  })) 
}

get UsuarioAutenticado() {       
  return this.currentUserSubject.value;   
} 

}