import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/servicios/users.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Users } from '../../users';
import { HttpClient } from '@angular/common/http';

//import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
 
  users: Users[] = [];
  public loginForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    public userService: UsersService,
    private http: HttpClient,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [''],
      password: [''],
    });
  }

  login() {
    this.userService.loginA().subscribe((users) => {
      const user = users.find((a: any) => {
        return (
          a.email === this.loginForm.value.email &&
          a.password === this.loginForm.value.password
        );
      });
      if (user) {
        console.log(user);        
        this.loginForm.reset();
        this.route.navigate(['admin']);
      } else {
        alert('Login incorrecto');
      }
    });
  }
}
