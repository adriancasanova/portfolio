import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { Proyecto } from 'src/app/proyecto';
import { ProyectoService } from 'src/app/servicios/proyecto.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css'],
})
export class ProyectosComponent implements OnInit {
  proyectosList: any;
  proyectos: Proyecto[] = []; 
  proyectoTitulo: string = "Proyectos";
  constructor(private datosPorfolio: PorfolioService, private proyectoService: ProyectoService) {}
  faPen = faPen;
  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe((data) => {
      this.proyectosList = data.listaProyectos;
    });

    this.proyectoService.getProyecto().subscribe((proyectos) => {
      this.proyectos = proyectos;
    });

  }
}
