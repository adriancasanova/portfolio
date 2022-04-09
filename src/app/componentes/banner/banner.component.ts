import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import { Banner } from 'src/app/banner';
import { BannerService } from 'src/app/servicios/banner.service';
import { Router } from '@angular/router';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
})
export class BannerComponent implements OnInit {
  banners: Banner[] = [];
  banner: any = '';
  bannerList: any;
  faPen = faPen;
  id: any = '';
  constructor(
    private datosPorfolio: PorfolioService,
    private route: Router,
    private bannerService: BannerService
  ) {}
  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe((data) => {
      this.bannerList = data;
    });

    this.bannerService.getBanner().subscribe((banners) => {
      this.banners = banners;
    });
  }

  adminBoton(route: string) {
    return this.route.url === route;
  }

  onEditar(banner: Banner) {
    this.banner = banner;
    this.banner.id = banner.id;
    this.bannerService.actualizarBanner(banner).subscribe((banner) => {
      this.banners.push(banner);
    });
    console.log(this.banner.id);
  }
}
