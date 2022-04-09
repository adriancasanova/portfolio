import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import { faPen } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  constructor(private datosPorfolio: PorfolioService) {}
  faPen = faPen;
  skillsSoftList: any;
  habilidad: any;
  skillsHardList: any;
  inglesList: any;
  skillsList: any;
  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe((data) => {
      this.skillsSoftList = data.SkillsSoftList;
    });

    this.datosPorfolio.obtenerDatos().subscribe((data) => {
      this.habilidad = data;
    });

    this.datosPorfolio.obtenerDatos().subscribe((data) => {
      this.skillsSoftList = data.skillsSoft;
    });

    this.datosPorfolio.obtenerDatos().subscribe((data) => {
      this.skillsHardList = data.skillsHard;
    });

    this.datosPorfolio.obtenerDatos().subscribe((data) => {
      this.inglesList = data.manejoIdiomas;
    });
  }
}
