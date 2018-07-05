import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlunoRoutingModule } from './aluno-routing.module';
import { AlunoService } from './aluno.service';
import { AlunoComponent } from './aluno/aluno.component';
import { SharedModule } from '../shared/shared.module';

import { TableModule } from 'primeng/components/table/table';
import { ButtonModule } from 'primeng/components/button/button';
import { DataTableModule } from 'primeng/components/datatable/datatable';
import { TooltipModule } from 'primeng/components/tooltip/tooltip';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { InputMaskModule } from 'primeng/components/inputmask/inputmask';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    AlunoRoutingModule,

    SharedModule,

    TableModule,
    ButtonModule,
    DataTableModule,
    TooltipModule,
    InputTextModule,
    InputMaskModule
  ],
  declarations: [AlunoComponent],
  providers: [ AlunoService, AlunoComponent]
})
export class AlunoModule { }
