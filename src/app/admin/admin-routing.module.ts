import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from 'src/app/admin/admin/admin.component';
import { AuthGuard } from 'src/app/seguranca/auth.guard';

const routes: Routes = [
  {
    path: 'admin', component: AdminComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
