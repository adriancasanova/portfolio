import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { AboutComponent } from './componentes/about/about.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
//import { LoginComponent } from './componentes/login/login.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

// importando los formularios de 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { FooterComponent } from './componentes/footer/footer.component';
//import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component'
import { PorfolioService } from './servicios/porfolio.service';
//import { InterceptorService } from './servicios/interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    AboutComponent,
    EducacionComponent,
    ExperienciaComponent,
  //  LoginComponent,
    ProyectosComponent,
    SkillsComponent,
    NavbarComponent,
    FooterComponent,
   // IniciarSesionComponent,
    PortfolioComponent,
    
  
  ],
  imports: [
    BrowserModule, 
    BrowserAnimationsModule, 
    ReactiveFormsModule, 
    FormsModule,
    HttpClientModule,
    RouterModule, 
    AppRoutingModule
  ],
 // providers: [PorfolioService, 
 // {provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true},
 // ],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
