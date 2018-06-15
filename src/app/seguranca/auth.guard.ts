import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

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

   if (this.auth.estaLogado) {
     console.log('sucesso');
      return true;
    } else {
      console.log('não autenticado');
     alert('Usuário não Autenticado, faça login ou se cadastre! ');
     this.router.navigate(['/login']);
     return false;
    }
  }



}
