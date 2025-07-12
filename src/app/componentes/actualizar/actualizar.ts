import { Component } from '@angular/core';
import { Doctor } from '../../models/doctor';
import { DoctoresService } from '../../doctores.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-actualizar',
  imports: [],
  templateUrl: './actualizar.html',
  styleUrl: './actualizar.css'
})
export class Actualizar {
  
  doctores: Doctor [] = [];

  constructor(private servicio: DoctoresService, private router: Router){}

  ngOnInit(): void{
    this.doctores=this.servicio.getAll();
  }

  irAEditar(id:number){
    this.router.navigate(['/editar', id]);
  }
}
