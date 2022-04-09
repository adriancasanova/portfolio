/*import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
url="http://localhost:5000/users";
currentUserSubject: BehaviorSubject<any>;
// Modifique el Json.parce porque daba error pero lo volvi a la manera en la que estaba
  constructor(private http: HttpClient) { 
console.log("El servicio de autenticacion esta corriendo");
this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser')|| '()'))
  }

iniciarSesion(credenciales:any):Observable<any> {
  return this.http.post(this.url, credenciales).pipe(map(data =>{
    sessionStorage.setItem('currentUser', JSON.stringify(data));
    this.currentUserSubject.next(data);
    return data;
  }))

}

get UsuarioAutenticado() {
  return this.currentUserSubject.value;
}

}
*/