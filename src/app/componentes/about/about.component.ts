import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faPen, faTimes } from '@fortawesome/free-solid-svg-icons';
import { AboutService } from 'src/app/servicios/about.service';
import { About } from 'src/app/about';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  faTimes = faTimes;
  formValue!: FormGroup;
  aboutModelObj: About = new About();
  aboutData!: any;
  constructor(
    private aboutService: AboutService,
    private formBuilder: FormBuilder,
    private route: Router
  ) {}

  faPen = faPen;

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      aboutNombre: [''],
      aboutDescripcion: [''],
      aboutImg: [''],
    });

    this.getAllAbout();
  }

  getAllAbout() {
    this.aboutService.getsAbout().subscribe((res) => {
      this.aboutData = res;
    });
  }

  onEdit(about: any) {
    this.aboutModelObj.id = about.id;
    this.formValue.controls['aboutNombre'].setValue(about.aboutNombre);
    this.formValue.controls['aboutDescripcion'].setValue(
      about.aboutDescripcion
    );
    this.formValue.controls['aboutImg'].setValue(about.aboutImg);
  }

  updateAboutDetails() {
    this.aboutModelObj.aboutNombre = this.formValue.value.aboutNombre;
    this.aboutModelObj.aboutDescripcion = this.formValue.value.aboutDescripcion;
    this.aboutModelObj.aboutImg = this.formValue.value.aboutImg;

    this.aboutService
      .updateAbout(this.aboutModelObj, this.aboutModelObj.id)
      .subscribe((res) => {       
        let ref = document.getElementById('cancel');
        ref?.click();
        this.formValue.reset();
        this.getAllAbout();
        console.log(this.formValue.value.aboutNombre);
      });
  }
  adminBoton(route: string) {
    return this.route.url === route;
  }
}
