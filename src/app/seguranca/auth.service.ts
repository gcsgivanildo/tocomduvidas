import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
// import { Observable } from 'rxjs';

import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

 private _estaLogado: boolean;

  constructor(private afAuth: AngularFireAuth, private router: Router) {

    this.afAuth.authState.subscribe( (user: firebase.User) => {
      if (user) {
        console.log('Usuário está logado ', user);
       this._estaLogado = true;
      } else {
        console.log('Usuário não está logado ');
        this._estaLogado = false;
      }
    });

  }

  get estaLogado(): boolean {
   return this._estaLogado;
  }


  // Autenticar com o Google
  authGoogle() {
    return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    .then((user: firebase.User) => {
        this.router.navigate(['/']);
      });
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
      alert('Você se deslogou');
    }, function (error) {
      console.error(error);
    });
  }

}
