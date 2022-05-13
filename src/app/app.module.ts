import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { AboutComponent } from './componentes/about/about.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FooterComponent } from './componentes/footer/footer.component';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ItemExperienciaComponent } from './componentes/item-experiencia/item-experiencia.component';
import { InterceptorService } from './servicios/interceptor.service';
import { LoginComponent } from './componentes/login/login.component';
import { AdminComponent } from './componentes/admin/admin.component';
import { ItemEducacionComponent } from './componentes/item-educacion/item-educacion.component';


@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    AboutComponent,
    EducacionComponent,
    ExperienciaComponent,   
    ProyectosComponent,
    SkillsComponent,
    NavbarComponent,
    FooterComponent,
    PortfolioComponent,    
    ItemExperienciaComponent,  
    LoginComponent,
    AdminComponent,
    ItemEducacionComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    FontAwesomeModule,
  ],
   providers: [AdminComponent, 
     {provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true},
   ],
  bootstrap: [AppComponent],
})
export class AppModule {}
