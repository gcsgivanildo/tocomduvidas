import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestoreDocument, AngularFirestore } from 'angularfire2/firestore';
import { ListaDeAreasClass } from 'src/app/admin/areas/listaDeAreas-class';
import { AuthService } from 'src/app/seguranca/auth.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class ListaDeAreasService {
  areaCollection: AngularFirestoreCollection<ListaDeAreasClass>;
  areas: Observable<ListaDeAreasClass[]>;
  areaDoc: AngularFirestoreDocument<ListaDeAreasClass>;

  constructor(
    public afs: AngularFirestore,
    public authService: AuthService
  ) {
    this.areaCollection = this.afs.collection('listaDeAreas');

    this.areas = this.areaCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data()  as ListaDeAreasClass;
        const id = a.payload.doc.id;
        return { id, ...data };
        // data.id = a.payload.doc.id;
       // return data;
      });
    });
  }

  getAreas() {
    return this.areas;
  }

  // usado no compnente Cadastro
  addArea(area: ListaDeAreasClass) {
    const data = JSON.parse(JSON.stringify(area));
    this.areaCollection.add(data)
    .then(function() {
      console.log('Documento adicionado com sucesso!');
      alert('Documento adicionado com sucesso!');
      }).catch(function(error) {
        console.error('Erro ao adicionar documento: ', error);
      });
  }
/*
  addArea(area: AreaClass) {
    this.areaCollection.add(area);
  }
*/
  deleteArea(area) {
    this.areaDoc = this.afs.doc(`listaDeAreas/${area}`);
   // console.log(area);

    this.areaDoc.delete().then(function() {
    console.log('Documento deletado com sucesso!');
    alert('Documento deletado com sucesso!');
    }).catch(function(error) {
      console.error('Erro ao remover documento: ', error);
    });
  }

  updateArea(idArea, area: ListaDeAreasClass) {
     this.areaDoc = this.afs.doc(`listaDeAreas/${idArea}`);
     this.areaDoc.update(area).then(function() {
      console.log('Documento atulizado com sucesso!');
      alert('Documento atualizado com sucesso!');
      }).catch(function(error) {
        console.error('Erro ao atualizar documento: ', error);
      });
  }
}
