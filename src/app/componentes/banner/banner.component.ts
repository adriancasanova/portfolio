import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Banner } from 'src/app/banner';
import { BannerService } from 'src/app/servicios/banner.service';
import { Router } from '@angular/router';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import {FormBuilder, FormGroup} from '@angular/forms';
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
})
export class BannerComponent implements OnInit { 
  faPen = faPen;
  formValue !: FormGroup;
  bannerModelObj: Banner = new Banner();
  bannerData !: any;
  constructor(   
    private route: Router,
    private bannerService: BannerService,
    private formBuilder: FormBuilder
  ) {}
  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      bannerImg: [''],     
    })
    this.getAllBanner();
  }

  adminBoton(route: string) {
    return this.route.url === route;
  }


  onEditBanner(banner: any){
    this.bannerModelObj.id = banner.id;
   this.formValue.controls['banner'].setValue(banner.bannerImg);
     
   }
   
   updateBannerDetails() {
     this.bannerModelObj.bannerImg = this.formValue.value.bannerImg;   
     this.bannerService.updateBanner(this.bannerModelObj, this.bannerModelObj.id)
     .subscribe(res => {       
       let ref = document.getElementById('cancel')
       ref?.click();
       this.formValue.reset();
       this.getAllBanner();      
     })
   }

   getAllBanner () {
    this.bannerService.getsBanner().subscribe(res => {
   this.bannerData = res; 
    })
  }
  
  
}
