import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css'],
})
export class ExperienciaComponent implements OnInit {
  @Output() onAdd: EventEmitter<any> = new EventEmitter();
  
   constructor(   
    private experienciaService: ExperienciaService,   
    private route: Router,
    private formBuilder: FormBuilder 
  ) {}
  
  titleExperiencia: string = 'Experiencia';
 
  ngOnInit(): void { 
 
  }

}


