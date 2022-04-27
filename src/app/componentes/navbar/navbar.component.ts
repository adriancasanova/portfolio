import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { NavbarService } from 'src/app/servicios/navbar.service';
import { Navbar } from 'src/app/navbar';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  user: any;
  navbarBrand: string = '#YoProgramo';
  navbarLogo: string = 'assets/imagenes/logoArgentinaPrograma2.jpg';
  loginboton: string = 'Login';

  formValue!: FormGroup;
  navbarModelObj: Navbar = new Navbar();
  navbarData!: any;
  constructor(
    private router: Router,
    private navbarService: NavbarService,
    private formBuilder: FormBuilder
  ) {}
  faPen = faPen;

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      logo: [''],
      link: [''],
    });
    this.getAllNavbar();
  }

  getAllNavbar() {
    this.navbarService.getsNavbar().subscribe((res) => {
      this.navbarData = res;
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
}
