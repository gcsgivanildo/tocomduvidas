import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { AuthService } from '../seguranca/auth.service';
import { AlunoClass } from './aluno-class';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
// import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {
  alunoCollection: AngularFirestoreCollection<AlunoClass>;
  alunos: Observable<AlunoClass[]>;
  alunoDoc: AngularFirestoreDocument<AlunoClass>;
  user;

  constructor( public afs: AngularFirestore, public authService: AuthService) {
    this.alunoCollection = this.afs.collection('aluno');

    this.alunos = this.alunoCollection.snapshotChanges().pipe(
      map(changes => {
        return changes.map(a => {
          const data = a.payload.doc.data() as AlunoClass;
          const id = a.payload.doc.id;
          return { id, ...data};
        });
      })
    );
  }

  getAlunos() {
    return this.alunos;
  }

  // usado no componente Cadastro
  addAluno(aluno: AlunoClass) {
    const data = JSON.parse(JSON.stringify(aluno));
    this.user = this.authService.currentUserUid;
    const alunoCollection = this.afs.collection('aluno').doc(this.user).set(data);
  }

  addAlunos(aluno: AlunoClass) {
    this.alunoCollection.add(aluno);
  }

  deleteAluno(aluno) {
    this.alunoDoc = this.afs.doc(`aluno/${aluno}`);

    this.alunoDoc.delete().then(function() {
      alert('Documento deletado com sucesso');
    }).catch(function(error) {
      alert('Documento não deletado!');
      console.error('Erro ao remover documento: ', error);
    });
  }

  updateAluno(idAluno, aluno: AlunoClass) {
    this.alunoDoc = this.afs.doc(`aluno/${idAluno}`);

    this.alunoDoc.update(aluno).then(function() {
      alert('Documento atualizado com sucesso');
    }).catch(function(error) {
      alert('Erro ao atualizar documento, entre em cantato');
      console.error('Erro ao atualizar documento: ', error);

    });
  }

}
