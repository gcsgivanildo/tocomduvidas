
import { Component, OnInit } from '@angular/core';
import { ListaDeAreasClass } from 'src/app/admin/areas/listaDeAreas-class';
import { ListaDeAreasService } from 'src/app/admin/areas/lista-de-areas.service';
import { AuthService } from 'src/app/seguranca/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  userId;
  listarAreas: ListaDeAreasClass[];
  listaDeArea: ListaDeAreasClass = {
    idAdmin: '',
    area: ''
  };

  constructor(
    private listaDeAreasService: ListaDeAreasService,
    private authService: AuthService
  ) {
    this.userId = authService.currentUserUid;
  }

  ngOnInit() {}

  listarTodasAreas () {
    this.listaDeAreasService.getAreas().subscribe(areas => {
      this.listarAreas = areas;

    });
  }

  inserirArea() {
    try {
      this.listaDeArea.idAdmin = this.userId;
      // console.log(this.userId);
      if (this.userId === 'xFertcaidwhdHmSmV8oG82JYis82') {
        if (this.listaDeArea.area !== '') {
          this.listaDeAreasService.addArea(this.listaDeArea);
          this.listaDeArea.area = '';
          this.listaDeArea.idAdmin = '';
        }
      } else {
        alert ('Você não é administrador!');
      }
     // console.log('Area', this.listaDeArea);
    } catch (error) {
      console.error('erro no cadastro', error);
    }
  }

  updateArea(areaRow, area) {
   this.listaDeArea.idAdmin = areaRow.idAdmin;
    if (area !== '') {
      this.listaDeAreasService.updateArea(areaRow.id, area);
    }
  }

  deletarArea(areaId) {
    const response = confirm('Tem certeza de que deseja excluir?');
    if ( response ) {
      this.listaDeAreasService.deleteArea(areaId);
    }
    return;
  }

}
