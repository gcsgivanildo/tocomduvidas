import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/components/button/button';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { SliderModule } from 'primeng/components/slider/slider';

import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { SegurancaRoutingModule } from './seguranca.routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    SegurancaRoutingModule,


    ButtonModule,
    InputTextModule,
    SliderModule

  ],
  declarations: [LoginComponent],
  providers: [AuthService, AuthGuard]
})
export class SegurancaModule { }
