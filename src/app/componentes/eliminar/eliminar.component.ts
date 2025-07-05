import { Component } from '@angular/core';
import { Doctor } from '../../models/doctor';
import { DoctoresService } from '../../doctores.service';

@Component({
  selector: 'app-eliminar',
  imports: [],
  templateUrl: './eliminar.component.html',
  styleUrl: './eliminar.component.css'
})
export class EliminarComponent {

  mensajeEliminado:string="";
  timeoutId:any;

  doctores: Doctor [] = [];

  constructor(private servicio: DoctoresService){}

  ngOnInit(): void{
    this.cargarDoctores();
  }

  cargarDoctores(): void {
    this.doctores=this.servicio.getAll();
  }

  elinimarDoctor(id:number){
    this.servicio.delete(id);
    console.log(`Empleado con id ${id} eliminado`);
    this.cargarDoctores();
    this.mensajeEliminado=`Empleado con id ${id} eliminado`;
    
    clearTimeout(this.timeoutId);
    
    this.timeoutId=setTimeout( () => {
      this.mensajeEliminado=""
    },3000);
  }

}
