import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  constructor(private datosPorfolio:PorfolioService) { }
  
  experienciaList:any;
  ngOnInit(): void {

this.datosPorfolio.obtenerDatos().subscribe(data => {

  this.experienciaList=data;
});

  }

}
