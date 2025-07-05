import { Routes } from '@angular/router';
import { ListarDoctoresComponent } from './componentes/listar-doctores/listar-doctores.component';
import { AgregarDoctoresComponent } from './componentes/agregar-doctores/agregar-doctores.component';
import { ConsultaComponent } from './componentes/consulta/consulta.component';
import { EliminarComponent } from './componentes/eliminar/eliminar.component';

export const routes: Routes = [
    {path: 'listar', component: ListarDoctoresComponent},
    {path: 'agregar', component: AgregarDoctoresComponent},
    {path: 'consulta/:id', component: ConsultaComponent},
    {path: 'eliminar', component: EliminarComponent},
    {path: '', redirectTo: 'listar', pathMatch: 'full'},
    {path: '**', redirectTo: 'listar'}
];
