import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { Experiencia } from 'src/app/experiencia';
import { UiExperienciaService } from 'src/app/servicios/ui-experiencia.service';
import { Subscription } from 'rxjs';
import { EXPERIENCIA } from '../../mock';


@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css'],
})
export class ExperienciaComponent implements OnInit {
  experiencias: Experiencia[] = [];

  constructor(
    private datosPorfolio: PorfolioService,
    private experienciaService: ExperienciaService,
    private uiExperienciaService: UiExperienciaService
  ) {}
  
  @Output() onAddExperiencia: EventEmitter<Experiencia> = new EventEmitter();
  experienciaA!: Experiencia;
  titleExperiencia: string = 'Experiencia';
  experienciaList: any;
  experienciaLogo: string = '';
  experienciaTitulo: any = '';
  experienciaDescripcion: any = '';
  id: any = '';
  //experiencia: Experiencia[] = [];

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe((data) => {
      this.experienciaList = data.experiencia;
    });

    this.experienciaService.getExperiencia().subscribe((experiencias) => {
      this.experiencias = experiencias;
    });
  }

  addExperiencia(experiencia: Experiencia) {
    this.experienciaService
      .addExperiencia(experiencia)
      .subscribe((experiencia) => {
        this.experiencias.push(experiencia);
      });
  }

  editExperiencia(experiencia: Experiencia) {
    this.experienciaService
      .actualizarExperiencia(experiencia)
      .subscribe((experiencia) => {
        this.experiencias.push(experiencia);
      });
  }
}
