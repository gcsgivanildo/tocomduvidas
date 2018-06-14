import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { SegurancaModule } from './seguranca/seguranca.module';
import { ProfessorModule } from './professor/professor.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2/firebase.app.module';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FirebaseConfig } from '../environments/firebase.config';
import { ButtonModule } from 'primeng/components/button/button';

import { StepsModule, MenuItem, SliderModule, MenuModule, PasswordModule, DropdownModule } from 'primeng/primeng';
import { InputTextModule, GrowlModule, MenubarModule, SharedModule, DataTableModule } from 'primeng/primeng';
import { RadioButtonModule, ContextMenuModule, TabViewModule } from 'primeng/primeng';
import {CheckboxModule} from 'primeng/primeng';
import {TableModule} from 'primeng/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    SegurancaModule,
    ProfessorModule,

    AngularFireModule.initializeApp(FirebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,

    BrowserAnimationsModule,
    ButtonModule,
    ContextMenuModule,
    DataTableModule,
    DropdownModule,
    GrowlModule,
    InputTextModule,
    MenubarModule,
    MenuModule,
    PasswordModule,
    RadioButtonModule,
    StepsModule,
    SliderModule,
    TabViewModule,
    TableModule,
    CheckboxModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
