import {Injectable} from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class AuthService {

  private authenticatedKey = "JWT_TOKEN";

  isAuthenticated() {
    const token = localStorage.getItem(this.authenticatedKey);

    return !!token;
  }

  saveToken(token: string) {
    localStorage.setItem(this.authenticatedKey, token);
  }
}
