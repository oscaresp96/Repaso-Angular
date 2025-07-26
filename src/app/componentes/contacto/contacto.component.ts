import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  imports: [ReactiveFormsModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {

  alerta: { tipo: 'success' | 'danger'; mensaje: string } | null = null;

  contactoForm: FormGroup;

  constructor(private fb: FormBuilder){
    this.contactoForm = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mensaje: ['', Validators.required]
    });
  }

  onSubmit(): void{
    if(this.contactoForm.valid){
      this.alerta = {
        tipo: 'success',
        mensaje: 'Formulario enviado correctamente'
      };
      console.log(this.contactoForm.value);
      this.contactoForm.reset();
    } else {
      this.alerta = {
        tipo: 'danger',
        mensaje: 'Formulario inválido. Por favor completa todos los campos.'
      };
    }

    setTimeout(() => {
      this.alerta = null;
    }, 3000);
  }

}
