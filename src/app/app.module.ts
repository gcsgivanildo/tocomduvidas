import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { SegurancaModule } from './seguranca/seguranca.module';
import { HomeModule } from './home/home.module';
import { ProfessorModule } from './professor/professor.module';
import { AlunoModule } from './aluno/aluno.module';
import { CadastroModule } from './cadastro/cadastro.module';

import { AngularFireModule } from 'angularfire2/firebase.app.module';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FirebaseConfig } from '../environments/firebase.config';
import { AngularFirestore } from 'angularfire2/firestore';

import { ButtonModule } from 'primeng/components/button/button';
import { StepsModule, MenuItem, SliderModule, MenuModule, PasswordModule, DropdownModule } from 'primeng/primeng';
import { InputTextModule, GrowlModule, MenubarModule, SharedModule, DataTableModule } from 'primeng/primeng';
import { RadioButtonModule, ContextMenuModule, TabViewModule } from 'primeng/primeng';
import { CheckboxModule } from 'primeng/primeng';
import { TableModule } from 'primeng/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PedidoAulaModule } from './pedido-aula/pedido-aula.module';
import { AdminModule } from 'src/app/admin/admin.module';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpModule,
    AppRoutingModule,
    SegurancaModule,
    HomeModule,
    AdminModule,
    ProfessorModule,
    AlunoModule,
    CadastroModule,
    PedidoAulaModule,

    AngularFireModule.initializeApp(FirebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,

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
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
