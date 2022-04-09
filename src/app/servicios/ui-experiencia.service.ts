import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class UiExperienciaService {
  private showAddExperiencia: boolean = false;
  private showEditExperiencia: boolean = false;
  private subjet = new Subject<any>();
  private subjeta = new Subject<any>();
  constructor() {}

  toggleAddTask(): void {
    this.showAddExperiencia = !this.showAddExperiencia;
    this.subjet.next(this.showAddExperiencia);
  }
  onToggle(): Observable<any> {
    return this.subjet.asObservable();
  }

  toggleEditExperiencia(): void {
    this.showEditExperiencia = !this.showEditExperiencia;
    this.subjeta.next(this.showEditExperiencia);
  }
  onToggleA(): Observable<any> {
    return this.subjeta.asObservable();
  }
}
