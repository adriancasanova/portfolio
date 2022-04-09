import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { faPen } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  link: string = '';
  id: any = '';
  logo: string = '';
  user: any;

  constructor(private datosPorfolio: PorfolioService, private router: Router) {}
  faPen = faPen;
  navbarList: any;
  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe((data) => {
      this.navbarList = data.navbar;
    });
  }
  hasRoute(route: string) {
    return this.router.url === route;
  }
  Logueado(route: string) {
    return this.router.url === route;
  }

  Loguear(route: string) {
    return this.router.url === route;
  }

  onNavbarSubmit() {
    console.log('funciona');
  }
}
