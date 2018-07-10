import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { PedidoAulaClass } from '../pedido-aula-class';
import { PedidoAulaService } from 'src/app/pedido-aula/pedido-aula.service';
import { AuthService } from 'src/app/seguranca/auth.service';
import { ListaDeAreasService } from 'src/app/admin/areas/lista-de-areas.service';
import { ListaDeAreasClass } from 'src/app/admin/areas/listaDeAreas-class';


@Component({
  selector: 'app-pedido-aula',
  templateUrl: './pedido-aula.component.html',
  styleUrls: ['./pedido-aula.component.css']
})
export class PedidoAulaComponent implements OnInit {

  areas: ListaDeAreasClass[];
  nomeArea = [];
  userId;

  pedidoAula: PedidoAulaClass = {
    alunoId: '',
    areaNome: '',
    dataHora: '',
    valor: 0,
    observacao: ''
  };

  constructor(
    public authService: AuthService,
    public listaDeAreasService: ListaDeAreasService,
    private pedidoAulaService: PedidoAulaService,
    private router: Router
  ) {
    this.userId = authService.currentUserUid;
  }

  ngOnInit() {
    this.listaDeAreasService.getAreas().subscribe(areas => {
      console.log(areas);
      this.areas = areas;
    });
    this.pegarArea();
  }

  pegarArea() {
    this.listaDeAreasService.getAreas().subscribe(areas => {
      console.log(areas);
      const area = areas;
      for (let i = 0; i < area.length; i++) {
        this.nomeArea.push({label: area[i].area, value: area[i].area});
      }

    });
  }

  enviarPedidoAula() {
    try {
      this.pedidoAula.alunoId = this.userId;
      if (this.pedidoAula.areaNome !== '') {
        this.pedidoAulaService.addPedidoAula(this.pedidoAula);
        this.pedidoAula.areaNome = '';
        this.pedidoAula.dataHora = '';
        this.pedidoAula.valor = 0;
        this.pedidoAula.observacao = '';
        this.router.navigate(['/pedidoAula']);
      }
     // console.log('pedidoAula', this.professor);
    } catch (error) {
      console.error('erro no cadastro', error);
    }
  }

}
