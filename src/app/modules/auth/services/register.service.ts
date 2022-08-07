import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {UserRegister} from "../pages/register/register.component";
import {catchError, of, throwError} from "rxjs";
import {NotificationService} from "../../../common/services/notification.service";

@Injectable()
export class RegisterService {
  constructor(private http: HttpClient, private notification: NotificationService) {
  }

  register(user: UserRegister) {
    return this.http.post("http://localhost:8080/api/v1/user", user)
      .pipe(catchError(err => {
        const {code} = err.error;

        if (code === "USER_DUPLICATION") {
          this.notification.openSnackBar("User already exists", "Close");
        } else {
          this.notification.openSnackBar("Something went wrong", "Close");
        }


        return throwError(err);
      }))
  }

  setPassword(userId: string, token: string) {
    return this.http.post(`https://localhost:8080/api/v1/user/${userId}/password`, {
      token,
    });
  }
}
