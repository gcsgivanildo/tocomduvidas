import { async } from '@angular/core/testing';
import { AreaClass } from './../../area/area-class';
import { Component, OnInit } from '@angular/core';

import * as firebase from 'firebase/app';
import { AuthService } from '../../seguranca/auth.service';
import { Router } from '@angular/router';
import { ProfessorClass } from '../../professor/professor-class';
import { ProfessorService } from '../../professor/professor.service';
import { AlunoClass } from '../../aluno/aluno-class';
import { AlunoService } from '../../aluno/aluno.service';
import { AreaService } from '../../area/area.service';
import { ProfessorComponent } from '../../professor/professor/professor.component';
import { AlunoComponent } from '../../aluno/aluno/aluno.component';
import { ListaDeAreasService } from 'src/app/admin/areas/lista-de-areas.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  userId;
  estaCadastradoP;
  estaCadastradoA;
  professores: ProfessorClass[];
  alunos: AlunoClass[];
  nomeArea = [];

  professor: ProfessorClass = {
    displayName: '',
    telefone: 0
  };
  area: AreaClass = {
    professorId: '',
    displayName: ''
  };
  aluno: AlunoClass = {
    displayName: '',
    telefone: 0
  };

  constructor(
    public authService: AuthService,
    private professorService: ProfessorService,
    private professorComponent: ProfessorComponent,
    private alunoComponent: AlunoComponent,
    private alunoService: AlunoService,
    private areaService: AreaService,
    private listaDeAreasService: ListaDeAreasService,
    private router: Router
  ) {
    this.userId = authService.currentUserUid;
  }

  ngOnInit() {
    this.existeProfessorId();
    this.existeAlunoId();
    this.pegarListaDeAreas() ;
  }

  pegarListaDeAreas() {
    this.listaDeAreasService.getAreas().subscribe(areas => {
      console.log(areas);
      const area = areas;
      for (let i = 0; i < area.length; i++) {
        this.nomeArea.push({label: area[i].area, value: area[i].area});
      }
    });
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



 // cadastro do professor
  onSubmitP() {
    try {
      if (this.professor.displayName !== '') {
        this.professorService.addProfessor(this.professor);
        this.professor.displayName = '';
        this.professor.telefone = 0 ;
        this.router.navigate(['/professor']);
      }
     // console.log('Nome do professor', this.professor);
    } catch (error) {
      console.error('erro no cadastro', error);
    }
  }
  // cadastro do aluno
  onSubmitD() {
    try {
      this.area.professorId = this.userId;
      console.log(this.userId);

      if (this.area.displayName !== '') {
        this.areaService.addArea(this.area);
        this.area.professorId = '';
        this.area.displayName = '';
      }
      console.log('Area', this.area);
    } catch (error) {
      console.error('erro no cadastro', error);
    }
  }

  // cadastro do aluno
  onSubmitA() {
    try {
      if (this.aluno.displayName !== '') {
        this.alunoService.addAluno(this.aluno);
        this.aluno.displayName = '';
        this.aluno.telefone = 0;
        this.router.navigate(['/aluno']);
      }
      console.log('Nome do aluno', this.aluno);
    } catch (error) {
      console.error('erro no cadastro', error);
    }
  }

}
