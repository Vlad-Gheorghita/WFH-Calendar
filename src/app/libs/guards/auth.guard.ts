import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private authService: AuthService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  //Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  {
    var loggedUser = JSON.parse(localStorage.getItem('user')!)

    if (loggedUser.uid)
      return true;

    this.router.navigate(['auth/login'],{queryParams: {returnUrl: state.url}});
    return false;
  }

}
