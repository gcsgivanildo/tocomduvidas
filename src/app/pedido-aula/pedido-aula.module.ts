import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PedidoAulaRoutingModule } from './pedido-aula-routing.module';
import { PedidoAulaComponent } from './pedido-aula/pedido-aula.component';
import { PedidoAulaService } from './pedido-aula.service';

import { DropdownModule } from 'primeng/components/dropdown/dropdown';
import { ButtonModule } from 'primeng/components/button/button';
import { CalendarModule } from 'primeng/components/calendar/calendar';
import { TableModule } from 'primeng/components/table/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextareaModule } from 'primeng/components/inputtextarea/inputtextarea';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { SharedModule } from 'src/app/shared/shared.module';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    PedidoAulaRoutingModule,

    InputTextareaModule,
    SharedModule,
    DropdownModule,
    ButtonModule,
    CalendarModule,
    TableModule,
    InputTextModule,


    CurrencyMaskModule
  ],
  declarations: [PedidoAulaComponent],
  providers: [ PedidoAulaService, PedidoAulaComponent]
})
export class PedidoAulaModule { }
