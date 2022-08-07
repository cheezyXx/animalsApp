import {ChangeDetectionStrategy, ChangeDetectorRef, Component} from '@angular/core';
import {Router} from "@angular/router";
import { FormBuilder, Validators } from "@angular/forms";

import {LoginService} from "../../services/login.service";
import {catchError, take, throwError} from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ["../../styles/auth-form.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  form = this.formBuilder.group({
    email: ["oliviggus@gmail.com", [Validators.required]],
    password: ["123456789", [Validators.required]],
  });

  constructor(
    private loginService: LoginService,
    private formBuilder: FormBuilder,
    private router: Router,
    private cd: ChangeDetectorRef,
  ) {
  }

  async onSubmit() {
    const { value } = this.form;

    this.loginService.login({
      email: value.email || "",
      password: value.password || "",
    })
      .pipe(
        catchError(err => {
          this.form.markAsUntouched();
          this.cd.markForCheck();
          return throwError(err);
        }),
        take(1),
      )
      .subscribe(async () => {
        await this.router.navigateByUrl("/dashboard");
      });

  }
}
