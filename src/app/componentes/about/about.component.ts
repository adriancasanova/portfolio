import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private datosPorfolio:PorfolioService) {}
miPorfolio:any;
  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data => {      
      this.miPorfolio = data[0];
    });
  }
}
