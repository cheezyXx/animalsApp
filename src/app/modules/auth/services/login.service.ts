import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { tap } from "rxjs";

export type UserLogin = {
  username: string;
  password: string;
};

type LoginResponse = {
  jwtToken: string;
};

@Injectable()
export class LoginService {

  constructor(private http: HttpClient) {
  }

  login(user: UserLogin) {
    return this.http.post<LoginResponse>("http://localhost:8080/api/v1/auth", user)
      .pipe(tap((response) => {
        localStorage.setItem("jwtToken", response.jwtToken);
      }));
  }
}
