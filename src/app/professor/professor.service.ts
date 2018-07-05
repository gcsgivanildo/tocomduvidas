import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { ProfessorClass } from './professor-class';
import { AuthService } from './../seguranca/auth.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {
  professorCollection: AngularFirestoreCollection<ProfessorClass>;
  professores: Observable<ProfessorClass[]>;
  professorDoc: AngularFirestoreDocument<ProfessorClass>;
  user;
  professorLogado;

  constructor(
    public afs: AngularFirestore,
    public authService: AuthService
  ) {
    this.professorCollection = this.afs.collection('professor');

    this.professores = this.professorCollection.snapshotChanges().map(changes => {
      return changes.map(p => {
        const data = p.payload.doc.data()  as ProfessorClass;
        const id = p.payload.doc.id;
        return { id, ...data };
        // data.id = a.payload.doc.id;
       // return data;
      });
    });
  }

  getProfessores() {
    return this.professores;
  }

  // usado no compnente Cadastro
  addProfessor(professor: ProfessorClass) {
    const data = JSON.parse(JSON.stringify(professor));
    this.user = this.authService.currentUserUid;
    const professorCollection = this.afs.collection('professor').doc(this.user).set(data)
    .then(function() {
      console.log('Documento adicionado com sucesso!');
      alert('Documento adicionado com sucesso!');
      }).catch(function(error) {
        console.error('Erro ao adicionar documento: ', error);
      });
  }

  addProfessores(professor: ProfessorClass) {
    this.professorCollection.add(professor);
  }

  deleteProfessor(professor) {
    this.professorDoc = this.afs.doc(`professor/${professor}`);
    console.log(professor);

    this.professorDoc.delete().then(function() {
    console.log('Documento deletado com sucesso!');
    alert('Documento deletado com sucesso!');
    }).catch(function(error) {
      console.error('Erro ao remover documento: ', error);
    });
  }

  updateProfessor(idProf, professor: ProfessorClass) {
     this.professorDoc = this.afs.doc(`professor/${idProf}`);
     this.professorDoc.update(professor).then(function() {
      console.log('Documento atulizado com sucesso!');
      alert('Documento atualizado com sucesso!');
      }).catch(function(error) {
        console.error('Erro ao atualizar documento: ', error);
      });
  }

  /*updateProfessor(professorId, professor: ProfessorClass) {
    this.professorDoc = this.afs.doc(`professor/${professorId}`);
    this.professorDoc.update(professor);
  }*/

 /* deletar(usuario): Promise<void> {
    console.log(usuario);
    return usuario;
    return this.afs.doc(usuario.id).delete();
  }
*/
}
