import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CadastroRoutingModule } from './cadastro-routing.module';
import { CadastroComponent } from './cadastro/cadastro.component';
import { SharedModule } from '../shared/shared.module';

import { RadioButtonModule } from 'primeng/components/radiobutton/radiobutton';
import { DropdownModule } from 'primeng/components/dropdown/dropdown';
import { ButtonModule } from 'primeng/components/button/button';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputMaskModule } from 'primeng/components/inputmask/inputmask';


@NgModule({
  imports: [
    CommonModule,
    CadastroRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    SharedModule,
   // BrowserModule,

    InputTextModule,
    RadioButtonModule,
    DropdownModule,
    ButtonModule,
    InputMaskModule,

  ],
  declarations: [CadastroComponent],
 // providers: [CadastroClass]
})
export class CadastroModule { }
