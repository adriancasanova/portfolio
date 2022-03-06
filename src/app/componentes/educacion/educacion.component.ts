import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  constructor(private datosPorfolio:PorfolioService) { }
  educacionList:any;
  ngOnInit(): void {

    this.datosPorfolio.obtenerDatos().subscribe(data => {
this.educacionList=data;

    })
  }

}
