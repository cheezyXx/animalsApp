import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {Injectable} from "@angular/core";
import {AuthService} from "../services/auth.service";

@Injectable({
  providedIn: "root"
})
export class ProtectRouteGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {
  }

  async canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const isLoggedIn = this.authService.isAuthenticated();

    if (isLoggedIn) {
      return true;
    }

    await this.router.navigate(['/contact']);
    return false;
  }
}
