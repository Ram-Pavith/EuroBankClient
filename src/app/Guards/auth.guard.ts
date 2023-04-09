import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanDeactivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../Services/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild, CanDeactivate<unknown>, CanLoad {
  constructor(private authService: AuthService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let url: string = state.url;
    return this.checkUserLogin(route,url);
  }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }


  checkUserLogin(route: ActivatedRouteSnapshot, url: any): boolean {
    if (this.authService.isLoggedIn()) {
      const userRole = this.authService.getRole()==undefined?"":this.authService.getRole()
      // if(userRole=="Employee" && route.data['expectedRole']!=userRole){
      //   this.router.navigateByUrl('/EmployeeHome')
      //   return false;
      // }
      // if(userRole=="Account" && route.data['expectedRole']!=userRole){
      //   this.router.navigateByUrl('/AccountsHome')
      //   return false;
      // }
      // if(userRole=="Customer" && route.data['expectedRole']!=userRole){
      //   this.router.navigateByUrl('/CustomerHome')
      //   return false;
      // }
      if (route.data['expectedRole'] && route.data['expectedRole'].indexOf(userRole) === -1) {
        console.log(route.data['expectedRole'])
        this.router.navigate(['/HomePage']);
        return false;
      }
      return true;
    }
    if(!this.authService.isLoggedIn()){
    this.router.navigate(['/HomePage']);
    return false;
    }
    return false;
  }
}
