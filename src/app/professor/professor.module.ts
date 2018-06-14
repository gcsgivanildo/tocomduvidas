import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfessorRoutingModule } from './professor-routing.module';
import { ProfessorComponent } from './professor/professor.component';

@NgModule({
  imports: [
    CommonModule,
    ProfessorRoutingModule
  ],
  declarations: [ProfessorComponent]
})
export class ProfessorModule { }
