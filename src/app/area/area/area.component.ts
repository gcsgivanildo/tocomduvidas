import { Component, OnInit, Input, Output } from '@angular/core';
import { AreaService } from '../area.service';
import { AreaClass } from '../area-class';
import { AuthService } from '../../seguranca/auth.service';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent implements OnInit {

  areas: AreaClass[];
  editarStatus = false;
  areaEditar: AreaClass;
  areaProfLogado;
  userId;
  areaId;

  area: AreaClass = {
    professorId: '',
    displayName: ''
  };

  constructor(
    public areaService: AreaService,
    public authService: AuthService
  ) {
    this.userId = this.authService.currentUserUid;
  }

  ngOnInit() {
    this.areaService.getAreas().subscribe(areas => {
      console.log(areas);
      this.areas = areas;
    });
  }

  // não está sendo usado
  areaAtual() {
   // this.userId = this.authService.currentUserUid;
    for (let i = 0; i < this.areas.length; i++) {
      const area = this.areas[i];
      if (area.professorId === this.userId) {
        this.areaProfLogado = this.areas[i];
        console.log(this.areaProfLogado);
      } else {
        this.areaProfLogado = '';
      }
    }
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

  deletarArea(areaId) {
    const response = confirm('Tem certeza de que deseja excluir');
    if ( response ) {
      this.areaService.deleteArea(areaId);
    }
    return;
  }

  pegarId() {
    this.userId = this.authService.currentUserUid;
    this.areaId = this.userId;
  }

  editarArea(areaId) {
    this.editarStatus = !this.editarStatus;
    this.areaId = areaId;
  }

  updateArea(area) {
    if (area.displayName !== '') {
      this.areaService.updateArea(this.areaId, area);
      this.areaEditar = null;
      this.editarStatus = false;
    }
  }

}
