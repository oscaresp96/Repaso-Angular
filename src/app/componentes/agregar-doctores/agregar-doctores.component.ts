import { Component } from '@angular/core';
import { Doctor } from '../../models/doctor';
import { DoctoresService } from '../../doctores.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-agregar-doctores',
  imports: [FormsModule],
  templateUrl: './agregar-doctores.component.html',
  styleUrl: './agregar-doctores.component.css'
})
export class AgregarDoctoresComponent {
  mensajeExito: string = '';

trabajador: Doctor = {
  id: 0,
  nombre: '',
  edad: 0,
  sueldo: 0,
  antiguedad: 0,
  foto: ''
  };
constructor(private doctoresService: DoctoresService) { }
esFemenino: boolean = false;
asignarFotoAleatoria(){
  let genero;
  const id= Math.floor(Math.random() * 100);
  if (this.esFemenino) {
    genero = 'women';
  }else{
    genero =  'men';
  }
  this.trabajador.foto = `https://randomuser.me/api/portraits/${genero}/${id}.jpg`;
}
guardar(){
  this.doctoresService.create(this.trabajador);
  this.limpiar();
  console.log('Trabajador:',this.trabajador);
  console.log('¿es femenino?', this.esFemenino);
}
limpiar(): void {
  this.trabajador = {
    id: 0,
    nombre: '',
    edad: 0,
    sueldo: 0,
    antiguedad: 0,
    foto: ''
  };
this.esFemenino = false;
  this.mensajeExito = 'Doctor agregado exitosamente';
  setTimeout(() => {
    this.mensajeExito = '';
  }
, 3000); // Oculta el mensaje después de 3 segundos
}
}