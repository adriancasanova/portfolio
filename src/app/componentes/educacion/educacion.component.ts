import { Component, OnInit } from '@angular/core';
import {faPen} from '@fortawesome/free-solid-svg-icons';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { Educacion } from 'src/app/educacion';
@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  educacionTitulo: string = "Educacion";
  constructor(private educacionService: EducacionService) { }
  
  ngOnInit(): void {
  }
}
