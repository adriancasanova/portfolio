import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from 'rxjs';
import { AutenticacionService } from './autenticacion.service';
@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {
 
  constructor(private autenticacionServicio:AutenticacionService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {    
   var currentUser= this.autenticacionServicio.UsuarioAutenticado;
 

   if ( currentUser != null){      
    req=req.clone({
      setHeaders:{
        Authorization: `Bearer ${currentUser.token}` 
      }
    });    
   }
   console.log("El interceptor esta corriendo" + JSON.stringify(currentUser));
    return next.handle(req);
  }
} 