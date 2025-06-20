import { Injectable } from '@angular/core';
import plantilla from './data/plantilla.json';
import { Doctor } from './models/doctor';
@Injectable({
  providedIn: 'root',
})
export class DoctoresService {
doctores: Doctor[] = plantilla;
  constructor() {}
  ngOnInit(): void {}
  getAll(): Doctor[] {
    const recuperarDatos: Doctor[] = JSON.parse(
      localStorage.getItem('doctores') ?? '[]'
    );
    if (recuperarDatos.length === 0) {
      this.doctores = plantilla;
    } else {
      this.doctores = recuperarDatos;
    }
    return this.doctores;
  }
  getById(idDoc: number): Doctor | null {
    const encontrado = this.doctores.find((doc) => doc.id === idDoc);
    return encontrado || null;
  }
  delete(idDoc: number): void {
    const index = this.doctores.findIndex((doc) => doc.id === idDoc);
    if (index !== -1) {
      this.doctores.splice(index, 1);
      localStorage.setItem('doctores', JSON.stringify(this.doctores));
    }
  }
  create(objeto: Doctor): void {
    this.doctores.push(objeto);
    localStorage.setItem('doctores', JSON.stringify(this.doctores));
  }
  update(objeto: Doctor): void {
    const index = this.doctores.findIndex((doc) => doc.id === objeto.id);
    if (index !== -1) {
      this.doctores[index] = objeto;
      localStorage.setItem('doctores', JSON.stringify(this.doctores));
    }
  }
}
