import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private auth: AuthService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
   // return true;
      return this.auth.isSignedInStream
      .pipe(map<boolean, boolean>((estaLogado: boolean) => {
        if (!estaLogado) {
          this.router.navigate(['/login']);
        }
        return estaLogado;
      }));

/*
   if (this.auth.estaLogado) {
     console.log('sucesso');
      return true;
    } else {
      console.log('não autenticado');
     alert('Usuário não Autenticado, faça login ou se cadastre! ');
     this.router.navigate(['/login']);
     return false;
    }
    */
  }



}
