import { Component } from '@angular/core';
import { DoctoresService } from '../../doctores.service';
import { Doctor } from '../../models/doctor';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-listar-doctores',
  imports: [CommonModule],
  templateUrl: './listar-doctores.component.html',
  styleUrl: './listar-doctores.component.css'
})
export class ListarDoctoresComponent {
  misDoctores!:Doctor[];
  constructor(private doctoresService: DoctoresService) {

}
ngOnInit(): void{
  this.misDoctores = this.doctoresService.getAll();
  console.log(this.misDoctores);
  let doc;
  doc=this.doctoresService.getById(1);
  console.log(doc);
  doc=this.doctoresService.getById(2);
  console.log(doc);
  this.doctoresService.delete(1);
  this.doctoresService.delete(2);
}
}


