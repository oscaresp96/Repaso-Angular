import { Component } from '@angular/core';
import { Doctor } from '../../models/doctor';
import { ActivatedRoute } from '@angular/router';
import { DoctoresService } from '../../doctores.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-consulta',
  imports: [CommonModule],
  templateUrl: './consulta.component.html',
  styleUrl: './consulta.component.css'
})
export class ConsultaComponent {

  id!: number;
  doctor!: Doctor | null;

  constructor(
    private route: ActivatedRoute,
    private servicio: DoctoresService
   ) {}

   ngOnInit(){
    this.route.paramMap.subscribe(params => {
      this.id = Number(params.get('id'));
      this.doctor = this.servicio.getById(this.id);
    });
   }
}
