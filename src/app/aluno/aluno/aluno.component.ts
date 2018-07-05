import { Component, OnInit } from '@angular/core';

import { AlunoClass } from './../aluno-class';
import { AlunoService } from '../aluno.service';
import { AuthService } from '../../seguranca/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit {

  alunos: AlunoClass[];
  editarStatus = false;
  alunoEditar: AlunoClass;
  userId;
  alunoId;
  alunoLogado;

  aluno: AlunoClass = {
    displayName: '',
    telefone: 0
  };

  constructor(
    public alunoService: AlunoService,
    public authService: AuthService,
    private router: Router

  ) {
    this.userId = this.authService.currentUserUid;
  }

  ngOnInit() {
    this.alunoService.getAlunos().subscribe(alunos => {
      console.log(alunos);
      this.alunos = alunos;
    });
  }

  alunoAtual() {
    this.userId = this.authService.currentUserUid;
    for (let i = 0; i < this.alunos.length; i++) {
      const aluno = this.alunos[i];
      if (aluno.id === this.userId) {
        this.alunoLogado = this.alunos[i];
        console.log(this.alunoLogado);
      } else {
        this.alunoLogado = '';
      }
    }
  }


  deletarAluno(alunoId) {
    const response = confirm('Tem certeza de que deseja excluir');
    if ( response ) {
      this.alunoService.deleteAluno(alunoId);
      this.router.navigate(['/']);
    }
    return;
  }

  pegarId() {
    this.userId = this.authService.currentUserUid;
    this.alunoId = this.userId;
  }

  editarAluno(alunoId) {
    this.editarStatus = !this.editarStatus;
    this.alunoId = alunoId;
  }

  updateAluno(aluno) {
    if (aluno.displayName !== '') {
      this.alunoService.updateAluno(this.alunoId, aluno);
      this.alunoEditar = null;
      this.editarStatus = false;
    }
  }

}
