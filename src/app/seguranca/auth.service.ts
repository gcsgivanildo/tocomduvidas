import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

 // private _estaLogado: boolean;
  public isSignedInStream: Observable<boolean>;
  usuario: Observable<firebase.User>;
  public _currentUserUid: string;

  constructor(private afAuth: AngularFireAuth, private router: Router) {
    this.usuario = this.afAuth.authState;

    this.afAuth.authState.subscribe( (user: firebase.User) => {
      if (user) {
        console.log('Usuário está logado ', user);
        this._currentUserUid = user.uid;
      //  this._estaLogado = true;
      } else {
        console.log('Usuário não está logado ');
        this._currentUserUid = '';
       // this._estaLogado = false;
      }
    });
    this.isSignedInStream = this.afAuth.authState
    .pipe(map<firebase.User, boolean>((user: firebase.User ) => {
      return user != null;
    }));
  }

  get currentUserUid(): string {
    return this._currentUserUid;
  }
 // get estaLogado(): boolean {
 //  return this._estaLogado;
 // }


  // Autenticar com o Google
  authGoogle() {
    return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    // .then((user: firebase.User) => {
     //   this.router.navigate(['/login']);
     // });
  }
  // Vincular conta ao Google
  vinculaGoogle() {
   this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  // Autenticar com o Facebook
  authFacebook() {
    return this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
  }
  // Vincular conta ao Facebook
  vinculaFacebook() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
  }

  // Autenticar com o Twitter
  authTwitter() {
    return this.afAuth.auth.signInWithPopup(new firebase.auth.TwitterAuthProvider());
  }
  // Vincular conta ao Twitter
  vinculaTwitter() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.TwitterAuthProvider());
  }

  // Autenticar com o GitHub
  authGitHub() {
    return this.afAuth.auth.signInWithPopup(new firebase.auth.GithubAuthProvider());
  }
   // Vincular conta ao Facebook
  vinculaGitHub() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GithubAuthProvider());
  }

  logout() {
    return this.afAuth.auth
    .signOut()
    .then(function () {
      console.log('');
    }, function (error) {
      console.error(error);
    });
  }

}
