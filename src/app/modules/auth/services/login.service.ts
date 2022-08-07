import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {catchError, tap, throwError} from "rxjs";

import {AuthService} from "../../../common/services/auth.service";
import {API_URL} from "../../../common/utils";
import {NotificationService} from "../../../common/services/notification.service";

export type UserLogin = {
  email: string;
  password: string;
};

type LoginResponse = {
  jwtToken: string;
};

@Injectable()
export class LoginService {

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private notificationService: NotificationService,
  ) {
  }

  login(user: UserLogin) {
    return this.http.post<LoginResponse>(`${API_URL}/api/v1/auth`, user)
      .pipe(
        catchError(err => {
          const {code} = err.error;
          if (code === "BAD_CREDENTIALS") {
            this.notificationService.openSnackBar("Invalid username or password")
          }
          return throwError(err);
        }),
        tap((response) => {
          this.authService.saveToken(response.jwtToken)
        }));
  }
}
