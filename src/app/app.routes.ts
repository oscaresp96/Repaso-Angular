import { Routes } from '@angular/router';
import { ListarDoctoresComponent } from './componentes/listar-doctores/listar-doctores.component';
import { AgregarDoctoresComponent } from './componentes/agregar-doctores/agregar-doctores.component';
import { ConsultaComponent } from './componentes/consulta/consulta.component';
import { EliminarComponent } from './componentes/eliminar/eliminar.component';
import { Actualizar } from './componentes/actualizar/actualizar';
import { EditarComponent } from './componentes/editar/editar.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
// Update the path below if the file exists elsewhere, or create the file if missing.

export const routes: Routes = [
    {path: 'listar', component: ListarDoctoresComponent},
    {path: 'agregar', component: AgregarDoctoresComponent},
    {path: 'consulta/:id', component: ConsultaComponent},
    {path: 'eliminar', component: EliminarComponent},
    {path: 'actualizar', component: Actualizar},
    {path: 'editar/:id', component:EditarComponent},
    {path: 'contacto', component: ContactoComponent},

    {path: '', redirectTo: 'listar', pathMatch: 'full'},
    {path: '**', redirectTo: 'listar'}
];
