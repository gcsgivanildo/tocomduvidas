import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin/admin.component';
import { ListaDeAreasService } from 'src/app/admin/areas/lista-de-areas.service';

import { SharedModule } from 'src/app/shared/shared.module';
import { TableModule } from 'primeng/components/table/table';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { ButtonModule } from 'primeng/components/button/button';
import { TooltipModule } from 'primeng/components/tooltip/tooltip';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule,

    SharedModule,

    TableModule,
    InputTextModule,
    ButtonModule,
    TooltipModule

  ],
  declarations: [AdminComponent],
  providers: [ListaDeAreasService, AdminComponent]
})
export class AdminModule { }
