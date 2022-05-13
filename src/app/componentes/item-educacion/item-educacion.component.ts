import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { faTimes, faPen } from '@fortawesome/free-solid-svg-icons';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-item-educacion',
  templateUrl: './item-educacion.component.html',
  styleUrls: ['./item-educacion.component.css']
})
export class ItemEducacionComponent implements OnInit {
  formValueAgregar !: FormGroup;
  formValue !: FormGroup;
  educacionModelObj: Educacion = new Educacion();
  experienciaModel: Educacion = new Educacion();
  educacionData !: any;
  faTimes = faTimes;
  faPen = faPen;
  constructor(private educacionService: EducacionService, private formBuilder: FormBuilder, private route: Router) { }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      educacionTitulo: [''],
      educacionDescripcion: [''],
      educacionLogo: ['']
    })
    this.getAllEducacion();  
    this.formValueAgregar = this.formBuilder.group({
      educacionTitulo: [''],
      educacionDescripcion: [''],
      educacionLogo: ['']
    })
  }


  postEducacionDetails(){
    this.experienciaModel.educacionTitulo = this.formValueAgregar.value.educacionTitulo;
    this.experienciaModel.educacionDescripcion = this.formValueAgregar.value.educacionDescripcion;
    this.experienciaModel.educacionLogo = this.formValueAgregar.value.educacionLogo;
    this.educacionService.postEducacion(this.experienciaModel).subscribe(res =>{
      console.log(res);      
      let ref = document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getAllEducacion();
    })
  }
 
 getAllEducacion () {
   this.educacionService.getsEducacion().subscribe(res => {
  this.educacionData = res; 
   })
 }

 deleteEducacion (educacion: any) {
   this.educacionService.deleteEducacion(educacion.id)
   .subscribe(res =>{    
     this.getAllEducacion();
   })
 }
 
onEditEducacion(educacion: any){
 this.educacionModelObj.id = educacion.id;
this.formValue.controls['educacionTitulo'].setValue(educacion.educacionTitulo);
this.formValue.controls['educacionDescripcion'].setValue(educacion.educacionDescripcion);
this.formValue.controls['educacionLogo'].setValue(educacion.educacionLogo);
}

updateEducacionDetails() {
  this.educacionModelObj.educacionTitulo = this.formValue.value.educacionTitulo;
  this.educacionModelObj.educacionDescripcion = this.formValue.value.educacionDescripcion;
  this.educacionModelObj.educacionLogo = this.formValue.value.educacionLogo;

  this.educacionService.updateEducacion(this.educacionModelObj, this.educacionModelObj.id)
  .subscribe(res => {
    let ref = document.getElementById('cancel')
    ref?.click();
    this.formValue.reset();
    this.getAllEducacion();    
  })
}
adminBoton(route: string) {
  return this.route.url === route;
}

clickAddEducacion() {
  this.formValue.reset(); 
} 

}
