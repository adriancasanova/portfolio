import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { Experiencia } from 'src/app/experiencia';
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
    private experienciaService: ExperienciaService    
  ) {}
  
  titleExperiencia: string = 'Experiencia';
 // @Input () experiencia!: Experiencia 
//@Input() onExperiencia: EventEmitter<Experiencia> = new EventEmitter();
  //experiencia!: Experiencia;
 /* 
  
 // @Input() prueba: any = '';
  experiencia: Experiencia[] = [];  */
 
  ngOnInit(): void {

  }
/*
  addExperiencia(experiencia: Experiencia) {
    this.experienciaService
      .addExperiencia(experiencia)
      .subscribe((experiencia) => {
        this.experiencias.push(experiencia);
      });
  }
 
 
 */

}
