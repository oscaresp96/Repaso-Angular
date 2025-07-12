import { Component } from '@angular/core';
import { Doctor } from '../../models/doctor';
import { DoctoresService } from '../../doctores.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editar',
  imports: [FormsModule],
  templateUrl: './editar.component.html',
  styleUrl: './editar.component.css'
})
export class EditarComponent {

  doctor: Doctor = {
  id: 0,
  nombre: '',
  edad: 0,
  sueldo: 0,
  antiguedad: 0,
  especialidad: '',
  ciudad: '',
  telefono: '',
  foto: ''
  };

  mensajeExito:string="";
  esFemenino:boolean=false;

  constructor(private servicio:DoctoresService, private router:Router, private route:ActivatedRoute){}

  ngOnInit(): void{
    this.route.paramMap.subscribe( params => {
      const id=Number(params.get('id'));
      const encontrado = this.servicio.getById(id);
      if (encontrado!==null){
        this.doctor={... encontrado};
      }else{
        this.mensajeExito="Doctor no encontrado";
      }
    });
  }

  actualizar(): void{
    this.servicio.update(this.doctor);
    this.mensajeExito= `Doctor con id ${this.doctor.id} Actualizado ! ! !`;

    setTimeout( () => {
      this.mensajeExito="";
      this.router.navigate(['/actualizar']);
    }, 3000);
  }

asignarFotoAleatoria(){
  let genero;
  const id= Math.floor(Math.random() * 100);
  if (this.esFemenino) {
    genero = 'women';
  }else{
    genero =  'men';
  }
  this.doctor.foto = `https://randomuser.me/api/portraits/${genero}/${id}.jpg`;
}

}
