import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private toastr: ToastrService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  //Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  {
    var loggedUser = JSON.parse(localStorage.getItem('user')!)
    if (loggedUser === null) {
      this.router.navigate(['auth/login'],{queryParams: {returnUrl: state.url, message: 'No User Authenticated'}})
      return false;
    }
    if (loggedUser.uid && loggedUser.emailVerified)
      return true;

    this.router.navigate(['auth/login'], { queryParams: { returnUrl: state.url, message: 'No User Authenticated' } });
    !loggedUser.uid ? this.toastr.error("No user is authenticated.") : this.toastr.error(`Email has not been verified for ${loggedUser.email}`)

    return false;
  }

}
