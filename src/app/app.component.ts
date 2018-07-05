import { AlunoClass } from './aluno/aluno-class';
import { async } from '@angular/core/testing';
import { ProfessorService } from './professor/professor.service';
import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from './seguranca/auth.service';
import { Router } from '@angular/router';
import { equal } from 'assert';
import { equalPath } from '@angular/router/src/url_tree';
import { ProfessorClass } from './professor/professor-class';
import { ProfessorComponent } from './professor/professor/professor.component';
import { AlunoService } from './aluno/aluno.service';
import { AlunoComponent } from './aluno/aluno/aluno.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  userId;
  usuario;
  estaCadastradoP;
  estaCadastradoA;
  professores: ProfessorClass[];
  alunos: AlunoClass[];

  constructor(
   public authService: AuthService,
   public professorService: ProfessorService,
   public professorComponent: ProfessorComponent,
   public alunoService: AlunoService,
   public alunoComponent: AlunoComponent,
   private router: Router,
  ) {
    this.usuario = authService.usuario;
    this.userId = this.authService.currentUserUid;
   // this.estaCadastrado = this.professorComponent.estaCadastrado;
  }

  ngOnInit() {
    this.existeProfessorId();
    this.existeAlunoId();
  }

  existeProfessorId() {
    this.professorService.getProfessores().subscribe(professores => {
      console.log(professores);
      this.professores = professores;
      this.userId = this.authService.currentUserUid;
     // for (const iterator of this.professores) {
      for (let i = 0; i < this.professores.length; i++) {
        if ( professores[i].id === this.userId ) {
        // console.log('ate que foi');
          this.estaCadastradoP = true;
          break;
        } else {
        // console.log('naão deu');
          this.estaCadastradoP = false;
        }
      }
    });
  }

  existeAlunoId() {
    this.alunoService.getAlunos().subscribe(alunos => {
      // console.log(alunos);
      this.alunos = alunos;
      this.userId = this.authService.currentUserUid;
      for (let i = 0; i < this.alunos.length; i++) {
        if ( alunos[i].id === this.userId ) {
        // console.log('ate que foi');
          this.estaCadastradoA = true;
          break;
        } else {
        // console.log('naão deu');
          this.estaCadastradoA = false;
        }
      }
    });
  }

  // Logout
  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);

  }
}
