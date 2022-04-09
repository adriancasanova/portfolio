import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EXPERIENCIA } from '../../mock';
import { Experiencia } from 'src/app/experiencia';
import { faTimes, faPen } from '@fortawesome/free-solid-svg-icons';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { UiExperienciaService } from 'src/app/servicios/ui-experiencia.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { newArray } from '@angular/compiler/src/util';

@Component({
  selector: 'app-item-experiencia',
  templateUrl: './item-experiencia.component.html',
  styleUrls: ['./item-experiencia.component.css'],
})
export class ItemExperienciaComponent implements OnInit {
  experiencias: Experiencia[] = [];
  @Input() experiencia: Experiencia = EXPERIENCIA[0];
  @Input() experienciaA!: Experiencia;
  
  @Output() onEditExperiencia: EventEmitter<Experiencia> = new EventEmitter();
  
  faPen = faPen;
  faTimes = faTimes;

  // add task
  showAddExperiencia: boolean = true;
  subscription?: Subscription;
  experienciaTitulo: string = '';
  experienciaDescripcion = '';
  experienciaLogo: string = '';
  showEditExperiencia: boolean = false;
  id: any = '';

  constructor(
    private experienciaService: ExperienciaService,
    private uiExperienciaService: UiExperienciaService,
    private route: Router,
    private formBuilder: FormBuilder
  ) {
    this.subscription = this.uiExperienciaService
      .onToggle()
      .subscribe((value) => (this.showAddExperiencia = value));
    this.subscription = this.uiExperienciaService
      .onToggleA()
      .subscribe((value) => (this.showEditExperiencia = value));
  }

  ngOnInit(): void {
    this.experienciaService.getExperiencia().subscribe((experiencias) => {
      this.experiencias = experiencias;
    });
  }

 

  eliminarExperiencia(experiencia: Experiencia) {
    this.experienciaService.eliminarExperiencia(experiencia).subscribe(() => {
      this.experiencias = this.experiencias.filter(
        (t) => t.id !== experiencia.id
      );
    });
  }

  toggleAddTask() {
    this.uiExperienciaService.toggleAddTask();
  }

  toggleEditExperiencia(experiencia: Experiencia) {
    this.experienciaService
      .experienciaGet(experiencia)
      .subscribe((experiencias) => {
        this.experiencias.filter((t) => t.id === experiencia.id);
        this.experienciaDescripcion = experiencia.experienciaDescripcion;
        this.experienciaTitulo = experiencia.experienciaTitulo;
        this.experienciaLogo = experiencia.experienciaLogo;
        this.id = experiencia.id;
      });
  }

 

  onEditarSubmit() {
    const { experienciaLogo, experienciaTitulo, experienciaDescripcion, id } =
      this;
    const editarExperiencia = {
      experienciaLogo,
      experienciaTitulo,
      experienciaDescripcion,
      id,
    };
    this.onEditExperiencia.emit(editarExperiencia);
  }


  adminBoton(route: string) {
    return this.route.url === route;
  }
}
