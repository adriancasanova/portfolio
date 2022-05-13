import { Component, OnInit } from '@angular/core';
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
  constructor(private proyectoService: ProyectoService) {}
  faPen = faPen;
  ngOnInit(): void {  

    this.proyectoService.getProyecto().subscribe((proyectos) => {
      this.proyectos = proyectos;
    });

  }
}
