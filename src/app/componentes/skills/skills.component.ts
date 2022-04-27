import { Component, OnInit } from '@angular/core';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { Soft } from 'src/app/soft';
import { Idiomas } from 'src/app/idiomas';
import { Hard } from 'src/app/hard';
import { SoftService } from 'src/app/servicios/soft.service';
import { HardService } from 'src/app/servicios/hard.service';
import { IdiomasService } from 'src/app/servicios/idiomas.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  constructor(private softService: SoftService, private hardService: HardService, private idiomasService: IdiomasService) {}
  skillSoft: string = "Soft Skills";
  skillHard: string = "Hard Skills";
  idiomasTitulo: string = "Nivel de Ingles";
  habilidadesTitulo: string = "Habilidades"
  softs: Soft[] = [];
  hards: Hard[] = [];
  idiomas: Idiomas[] = [];
  faPen = faPen; 
  ngOnInit(): void {  

    this.softService.getSoft().subscribe((softs) => {
      this.softs = softs;
    });

    this.hardService.getHard().subscribe((hards) => {
      this.hards = hards;
    });

    this.idiomasService.getIdiomas().subscribe((idiomas) => {
      this.idiomas = idiomas;
    });


  }




}
