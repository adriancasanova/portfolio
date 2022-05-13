import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Experiencia } from 'src/app/experiencia';
import { faTimes, faPen } from '@fortawesome/free-solid-svg-icons';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-item-experiencia',
  templateUrl: './item-experiencia.component.html',
  styleUrls: ['./item-experiencia.component.css'],
})
export class ItemExperienciaComponent implements OnInit {
  formValueAgregar !: FormGroup;
  formValue !: FormGroup;
  experienciaModelObj: Experiencia = new Experiencia();
  experienciaModel: Experiencia = new Experiencia();
  experienciaData !: any;
  faTimes = faTimes;
  faPen = faPen;

  constructor(
    private experienciaService: ExperienciaService,   
    private route: Router,
    private formBuilder: FormBuilder
  ) {

  }

  ngOnInit(): void { 
    this.formValue = this.formBuilder.group({
      experienciaTitulo: [''],
      experienciaDescripcion: [''],
      experienciaLogo: ['']
    })
    this.getAllExperiencia();  

    this.formValueAgregar = this.formBuilder.group({
      experienciaTitulo: [''],
      experienciaDescripcion: [''],
      experienciaLogo: ['']
    })

  }
 
  adminBoton(route: string) {
    return this.route.url === route;
  }

  postExperienciaDetails(){
    this.experienciaModel.experienciaTitulo = this.formValueAgregar.value.experienciaTitulo;
    this.experienciaModel.experienciaDescripcion = this.formValueAgregar.value.experienciaDescripcion;
    this.experienciaModel.experienciaLogo = this.formValueAgregar.value.experienciaLogo;
    this.experienciaService.postExperiencia(this.experienciaModel).subscribe(res =>{
      console.log(res);     
      let ref = document.getElementById('cancel')
      ref?.click();
      this.formValueAgregar.reset();
      this.getAllExperiencia();
    })
  } 
 
 getAllExperiencia () {
   this.experienciaService.getsExperiencia().subscribe(res => {
  this.experienciaData = res; 
   })
 }

 deleteExperiencia (experiencia: any) {
   this.experienciaService.deleteExperiencia(experiencia.id)
   .subscribe(res =>{     
     this.getAllExperiencia();
   })
 } 

onEditExperiencia(experiencia: any){
  
 this.experienciaModelObj.id = experiencia.id;
this.formValue.controls['experienciaTitulo'].setValue(experiencia.experienciaTitulo);
this.formValue.controls['experienciaDescripcion'].setValue(experiencia.experienciaDescripcion);
this.formValue.controls['experienciaLogo'].setValue(experiencia.experienciaLogo);  
}

updateExperienciaDetails() {  
  this.experienciaModelObj.experienciaTitulo = this.formValue.value.experienciaTitulo;
  this.experienciaModelObj.experienciaDescripcion = this.formValue.value.experienciaDescripcion;
  this.experienciaModelObj.experienciaLogo = this.formValue.value.experienciaLogo;
  this.experienciaService.updateExperiencia(this.experienciaModelObj, this.experienciaModelObj.id)
  .subscribe(res => {    
    let ref = document.getElementById('cancel')
    ref?.click();
    this.formValue.reset(); 
    this.getAllExperiencia();    
  })
}

clickAddExperiencia() {
  this.formValue.reset();
} 

}
