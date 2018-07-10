import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestoreDocument, AngularFirestore } from 'angularfire2/firestore';
import { PedidoAulaClass } from './pedido-aula-class';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../seguranca/auth.service';

@Injectable({
  providedIn: 'root'
})
export class PedidoAulaService {
  pedidoAulaCollection: AngularFirestoreCollection<PedidoAulaClass>;
  pedidoAulas: Observable<PedidoAulaClass[]>;
  pedidoAulaDoc: AngularFirestoreDocument<PedidoAulaClass>;
  user;

  constructor(public afs: AngularFirestore, public authService: AuthService) {
    this.pedidoAulaCollection = this.afs.collection('pedidoAula');

    this.pedidoAulas = this.pedidoAulaCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as PedidoAulaClass;
        const id = a.payload.doc.id;
        return { id, ...data};
      });
    });
  }

  getPedidoAulas() {
    return this.pedidoAulas;
  }

  addPedidoAula(pedidoAula: PedidoAulaClass) {
    const data = JSON.parse(JSON.stringify(pedidoAula));
    this.pedidoAulaCollection.add(data).then(function() {
      alert('Documento Adicionado com sucesso');
    }).catch(function(error) {
      alert('Documento não deletado!');
      console.error('Erro ao remover documento: ', error);
    });
  }

  deletePedidoAula(pedidoAulaId) {
    this.pedidoAulaDoc = this.afs.doc(`pedidoAula/${pedidoAulaId}`);

    this.pedidoAulaDoc.delete().then(function() {
      alert('Documento deletado com sucesso');
    }).catch(function(error) {
      alert('Documento não deletado!');
      console.error('Erro ao remover documento: ', error);
    });
  }

  updatePedidoAula(pedidoAulaId, pedidoAula: PedidoAulaClass) {
    this.pedidoAulaDoc = this.afs.doc(`pedidoAula/${pedidoAulaId}`);

    this.pedidoAulaDoc.update(pedidoAula).then(function() {
      alert('Documento atualizado com sucesso');
    }).catch(function(error) {
      alert('Erro ao atualizar documento, entre em cantato');
      console.error('Erro ao atualizar documento: ', error);

    });
  }

}
