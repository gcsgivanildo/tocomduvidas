import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlunoRoutingModule } from './aluno-routing.module';
import { AlunoComponent } from './aluno/aluno.component';

@NgModule({
  imports: [
    CommonModule,
    AlunoRoutingModule
  ],
  declarations: [AlunoComponent]
})
export class AlunoModule { }
