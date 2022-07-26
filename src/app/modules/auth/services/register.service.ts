import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { UserRegister } from "../pages/register/register.component";

@Injectable()
export class RegisterService {
  constructor(private http: HttpClient) {
  }

  register(user: UserRegister) {
    return this.http.post("http://localhost:8080/api/v1/user", user);
  }
}
