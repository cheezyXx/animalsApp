import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from "@angular/router";
import { FormBuilder, Validators } from "@angular/forms";

import { LoginService } from "../../services/login.service";
import { take } from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ["../../styles/auth-form.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  form = this.formBuilder.group({
    username: ["", [Validators.required]],
    password: ["", [Validators.required]],
  });

  constructor(
    private loginService: LoginService,
    private formBuilder: FormBuilder,
    private router: Router,
    ) {
  }

  async onSubmit() {
    const { value } = this.form;

    this.loginService.login({
      username: "admin",
      password: "123456",
    })
      .pipe(take(1))
      .subscribe(async () => {
        await this.router.navigateByUrl("/dashboard");
      });

  }
}
