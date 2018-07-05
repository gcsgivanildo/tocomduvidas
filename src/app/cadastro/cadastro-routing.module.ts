import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './../seguranca/auth.guard';
import { CadastroComponent } from './cadastro/cadastro.component';

const routes: Routes = [
  { path: 'cadastro', component: CadastroComponent,
  canActivate: [AuthGuard]
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadastroRoutingModule { }
