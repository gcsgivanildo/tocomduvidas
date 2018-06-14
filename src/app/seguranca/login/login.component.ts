import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Observable } from 'rxjs';

import * as firebase from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: Observable<firebase.User>;
  nome: string;
  email: string;
  senha: string;
  urlImagem: string;

  constructor(
    public auth: AuthService,
    private router: Router) { }

  ngOnInit() {
  }

  // Autenticar email e senha
  authUser(f: NgForm) {
    // this.AngularFireAuth.auth
    firebase.auth()
    .signInWithEmailAndPassword(f.value.email, f.value.senha)
    .then(function (result) {
      console.log(result);
      alert('Autenticado ' + f.value.email);
    })
    .catch(function (error) {
      console.error(error.code);
      console.error(error.message);
      alert('Falha ao autenticar, contate o administrador');
    });
  }
  // Vincular conta ao usuario: email senha
  vinculaEmail(f: NgForm) {
    const credential = firebase.auth.EmailAuthProvider.credential(f.value.email, f.value.senha);
    firebase.auth().currentUser.linkWithCredential(credential).then((user) => {
      console.log('Usuário Vinculado');
    }, (erro) => {
      console.log('Erro');
      console.log(erro);
    });
  }

  // Autenticar como anonimo
  authAnonimo() {
    firebase
    .auth()
    .signInAnonymously()
    .then(function (result) {
      console.log(result);
      // displayName.innerText = 'Bem vindo, ' + emailInput.value;
      alert('Autenticado Anoninamente');
    })
    .catch(function (error) {
      console.error(error.code);
      console.error(error.message);
      alert('Falha ao autenticar, contate o administrador');
    });
  }

  // Autenticar com o Google
  authGoogle() {
   const provider = this.auth.authGoogle();
    this.signIn(provider);
  }
  // Vincular conta ao Google
  vincularAoGoogle() {
    const providerVincular = this.auth.vinculaGoogle();
    this.vincularConta(providerVincular);
  }

   // Autenticar com o Facebook
   authFacebook() {
    const provider = this.auth.authFacebook();
    this.signIn(provider);
  }
  // vincular conta já logada ao facebook
  vincularAoFacebook() {
    const providerVincular = this.auth.vinculaFacebook();
    this.vincularConta(providerVincular);
  }

   // Autenticar com o Twitter
   authTwitter() {
    const provider = this.auth.authTwitter();
    this.signIn(provider);
  }
  // Vincular conta ao Twitter
  vincularAoTwitter() {
    const providerVincular = this.auth.vinculaTwitter();
    this.vincularConta(providerVincular);
  }

  // Autenticar com o GitHub
  authGitHub() {
    const provider = this.auth.authGitHub();
    this.signIn(provider);
  }
  // Vincular conta ao GitHub
  vincularAoGithub() {
    const providerVincular = this.auth.vinculaGitHub();
    this.vincularConta(providerVincular);
  }
  signIn(provider) {
    provider
    .then((result) => {
      console.log(result);
     // this.token = result.credential.accessToken;
      alert('Autenticado com sucesso');
     // this.name = 'Bem vindo, ' + result.user.displayName;
      console.log('Bem vindo, ' + result.user.displayName);
      console.log(result.credential.accessToken);
    }).catch(function (error) {
      console.log(error);
      alert('Falha na autenticação');
    });
  }

  // vincular o login a outros meios
  vincularConta(provedor) {
    provedor.then((res: any) => {
      firebase.auth().currentUser.linkWithCredential(res.credential)
      .then((user) => {
        console.log('Usuário Vinculado');
      }, (erro) => {
        console.log('erro');
      });
    }).catch((erro: any) => {
      firebase.auth().currentUser.linkWithCredential(erro.credential)
      .then((user) => {
        console.log('ok');
      }, (erros) => {
        console.log('erro');
      });
    });
  }

  // Logout
  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }

/*
logout() {
    firebase.auth()
    .signOut()
    .then(function (){
      alert('Você se deslogou');
    }, function (error){
      console.error(error);
    });
  }

  getData() {
    this.token = localStorage.getItem('token');
    this.imageURL = localStorage.getItem('image');
    this.name = localStorage.getItem('name');
    this.email = localStorage.getItem('email');
   console.log(this.token, this.name, this.email);
  }

  clearLocalStorage() {
    localStorage.removeItem('token');
    localStorage.removeItem('image');
    localStorage.removeItem('name');
    localStorage.removeItem('email');
  }
*/

}
