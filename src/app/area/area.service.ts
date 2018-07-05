import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestoreDocument, AngularFirestore } from 'angularfire2/firestore';
import { AreaClass } from './area-class';
import { AuthService } from '../seguranca/auth.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class AreaService {
 areaCollection: AngularFirestoreCollection<AreaClass>;
 areas: Observable<AreaClass[]>;
 areaDoc: AngularFirestoreDocument<AreaClass>;
  user;

  constructor( public afs: AngularFirestore, public authService: AuthService ) {
    this.areaCollection = this.afs.collection('area');

  this.areas = this.areaCollection.snapshotChanges().map(changes => {
    return changes.map(a => {
      const data = a.payload.doc.data() as AreaClass;
      const id = a.payload.doc.id;
      return { id, ...data};
    });
  });
}

getAreas() {
  return this.areas;
}

addArea(area: AreaClass) {
  const data = JSON.parse(JSON.stringify(area));
  this.areaCollection.add(data).then(function() {
    alert('Documento Adicionado com sucesso');
  }).catch(function(error) {
    alert('Documento não deletado!');
    console.error('Erro ao remover documento: ', error);
  });
}

deleteArea(areaId) {
  this.areaDoc = this.afs.doc(`area/${areaId}`);

  this.areaDoc.delete().then(function() {
    alert('Documento deletado com sucesso');
  }).catch(function(error) {
    alert('Documento não deletado!');
    console.error('Erro ao remover documento: ', error);
  });
}

updateArea(idArea, area: AreaClass) {
  this.areaDoc = this.afs.doc(`area/${idArea.id}`);

  this.areaDoc.update(area).then(function() {
    alert('Documento atualizado com sucesso');
  }).catch(function(error) {
    alert('Erro ao atualizar documento, entre em cantato');
    console.error('Erro ao atualizar documento: ', error);

  });
}

updateAreas(areaRow, area: AreaClass) {
  this.areaDoc = this.afs.doc(`area/${areaRow.id}`);

  this.areaDoc.update(area).then(function() {
    alert('Documento atualizado com sucesso');
  }).catch(function(error) {
    alert('Erro ao atualizar documento, entre em cantato');
    console.error('Erro ao atualizar documento: ', error);

  });
}

}
