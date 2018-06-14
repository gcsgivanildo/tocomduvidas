import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../seguranca/auth.guard';
import { ProfessorComponent } from './professor/professor.component';

const routes: Routes = [

  { path: 'professor', component: ProfessorComponent,
  canActivate: [AuthGuard]
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfessorRoutingModule { }
