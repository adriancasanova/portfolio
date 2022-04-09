import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Experiencia } from 'src/app/experiencia';
import { UiExperienciaService } from 'src/app/servicios/ui-experiencia.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-experiencia',
  templateUrl: './add-experiencia.component.html',
  styleUrls: ['./add-experiencia.component.css'],
})
export class AddExperienciaComponent implements OnInit {
  @Output() onAddExperiencia: EventEmitter<Experiencia> = new EventEmitter();
  // @Output() onEditExperiencia: EventEmitter<Experiencia> = new EventEmitter();

  experienciaLogo: string = '';
  experienciaTitulo: string = '';
  experienciaDescripcion: string = '';
  showAddExperiencia: boolean = false;
  showEditExperiencia: boolean = false;
  subscription: Subscription;

  constructor(
    private uiExperienciaService: UiExperienciaService,
    private route: Router
  ) {
    this.subscription = this.uiExperienciaService
      .onToggle()
      .subscribe((value) => (this.showAddExperiencia = value));

    this.subscription = this.uiExperienciaService
      .onToggleA()
      .subscribe((values) => (this.showEditExperiencia = values));
  }

  ngOnInit(): void {}
  onSubmit() {
    if (this.experienciaDescripcion.length === 0) {
      alert('Por favor agrega una descripcion');
      return;
    }
    const { experienciaLogo, experienciaTitulo, experienciaDescripcion } = this;
    const newExperiencia = {
      experienciaLogo,
      experienciaTitulo,
      experienciaDescripcion,
    };
    this.onAddExperiencia.emit(newExperiencia);
  }

  /*onEditarSubmit () {
    const {experienciaTitulo, experienciaDescripcion} = this
    const editarExperiencia = {experienciaTitulo, experienciaDescripcion}
    this.onEditExperiencia.emit(editarExperiencia); 
 
  } */
  adminBoton(route: string) {
    return this.route.url === route;
  }
}
