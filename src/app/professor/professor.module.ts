import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProfessorRoutingModule } from './professor-routing.module';
import { ProfessorComponent } from './professor/professor.component';
import { ProfessorService } from './professor.service';
import { SharedModule } from '../shared/shared.module';

import {TableModule} from 'primeng/table';
import { ButtonModule } from 'primeng/components/button/button';
import { DataTableModule } from 'primeng/components/datatable/datatable';
import { TooltipModule } from 'primeng/components/tooltip/tooltip';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputMaskModule } from 'primeng/components/inputmask/inputmask';
import { AreaComponent } from '../area/area/area.component';
import { DropdownModule } from 'primeng/components/dropdown/dropdown';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    ProfessorRoutingModule,

    SharedModule,

    TableModule,
    ButtonModule,
    DataTableModule,
    TooltipModule,
    InputTextModule,
    InputMaskModule,
    DropdownModule
  ],
  declarations: [ProfessorComponent],
  providers: [ ProfessorService, ProfessorComponent, AreaComponent]
})
export class ProfessorModule { }
