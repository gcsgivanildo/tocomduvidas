import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ProfessorClass } from '../professor-class';
import { ProfessorService } from '../professor.service';
import { AuthService } from '../../seguranca/auth.service';
import { AreaComponent } from '../../area/area/area.component';
import { AreaClass } from '../../area/area-class';
import { AreaService } from '../../area/area.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-professor',
  templateUrl: './professor.component.html',
  styleUrls: ['./professor.component.css']
})
export class ProfessorComponent implements OnInit {
  professores: ProfessorClass[];
  areas: AreaClass[];
  editarStatus = false;
  professorEditar: ProfessorClass;
  userId;
  profId;
  areaId;

    // area
  area: AreaClass = {
    professorId: '',
    displayName: ''
  };

  professor: ProfessorClass = {
    displayName: '',
    telefone: 0
  };


  constructor(
    public professorService: ProfessorService,
    public authService: AuthService,
    public areaService: AreaService,
    public areaComponent: AreaComponent,
    private router: Router
  ) {
      this.userId = this.authService.currentUserUid;
    }

  ngOnInit() {
    this.professorService.getProfessores().subscribe(professores => {
    this.professores = professores;
    });

    this.areaService.getAreas().subscribe(areas => {
      this.areas = areas;
    });

  }

  cadastrarArea() {
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

  editarArea(areaId) {
    this.areaId = areaId;
  }
  updateArea(event, areaRow, area) {
    this.area.professorId = areaRow.professorId;
   // if (event.keyCode === 13) {
    if (area !== '') {
      this.areaService.updateAreas(areaRow, area);
     // this.areaEditar = null;
      this.editarStatus = false;
    }
    this.areaService.getAreas().subscribe(areas => {
      this.areas = areas;
      });
   // }
  }

  deletarArea(areaId) {
    console.log(areaId);
    const response = confirm('Tem certeza de que deseja excluir?');
    if ( response ) {
      this.areaService.deleteArea(areaId);
    }
    return;
  }

  deletarProfessor(professorId) {
    console.log(professorId);
    const response = confirm('Tem certeza de que deseja excluir?');
    if ( response ) {
      this.professorService.deleteProfessor(professorId);
    }
    this.router.navigate(['/']);
    return;
  }

  editarProfessor(professorId) {
    this.editarStatus = !this.editarStatus;
    this.profId = professorId;
  }

  pegarId() {
    this.userId = this.authService.currentUserUid;
    this.profId = this.userId;
  }

  updateProfessor(professor) {
    if (professor !== '') {
    this.professorService.updateProfessor(this.profId, professor);
    this.professorEditar = null;
    this.editarStatus = false;
  }
  }

}
