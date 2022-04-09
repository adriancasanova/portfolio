import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { LoginComponent } from './componentes/login/login.component';
import { AdminComponent } from './componentes/admin/admin.component';
//import {IniciarSesionComponent} from "./componentes/iniciar-sesion/iniciar-sesion.component"
//import { GuardGuard } from "./servicios/guard.guard";

const routes: Routes = [
  {
    path: 'portfolio',
    component: PortfolioComponent /*canActivate:[GuardGuard]*/,
  },
  //{path: 'iniciar-sesion', component:IniciarSesionComponent},
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'portfolio', pathMatch: 'full' },
  { path: 'admin', component: AdminComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
