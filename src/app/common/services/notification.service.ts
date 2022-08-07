import {Injectable} from "@angular/core";
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
  providedIn: "root"
})
export class NotificationService {

  constructor(private _snackBar: MatSnackBar) {
  }

  openSnackBar(message: string, action = "Close") {
    this._snackBar.open(message, action);
  }
}
