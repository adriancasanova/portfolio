import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import {faPen} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  tituloAbout: string = "";
  descripcionAbout: string = "";
  foto: string = "";
  id: any = "";

  constructor(private datosPorfolio:PorfolioService) {}
  faPen = faPen;
miPorfolio:any;
  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data => {      
      this.miPorfolio = data;
    });
  }
  onNavbarSubmit() {
    console.log("funciona")
  }




}
