import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, Validators} from "@angular/forms";

import {RegisterService} from "../../services/register.service";
import {checkPasswords} from "../../../../common/validators";
import {take} from "rxjs";

export type UserRegister = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

@Component({
  selector: 'app-register',
  templateUrl: 'register.component.html',
  styleUrls: ["../../styles/auth-form.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterComponent {
  form = this.formBuilder.nonNullable.group(
    {
      firstName: ["Tomas", [Validators.required, Validators.minLength(2)]],
      lastName: ["Svojanovsky", [Validators.required, Validators.minLength(2)]],
      email: ["olivius@gmail.com", [Validators.required, Validators.email]],
      password: ["123456789", [Validators.required, Validators.minLength(8)]],
      repeatPassword: ["123456789", [Validators.required, Validators.minLength(8)]],
    },
    {
      validators: [checkPasswords],
    }
  );

  constructor(
    private registerService: RegisterService,
    private formBuilder: FormBuilder,
    private router: Router,
  ) {
  }

  get email() {
    return this.form.get("email");
  }

  get firstName() {
    return this.form.get("firstName");
  }

  get lastName() {
    return this.form.get("lastName");
  }

  get password() {
    return this.form.get("password");
  }

  get repeatPassword() {
    return this.form.get("repeatPassword");
  }

  async onSubmit() {
    const {value} = this.form;

    this.registerService.register({
      firstName: value.firstName || "",
      lastName: value.lastName || "",
      email: value.email || "",
      password: value.password || "",
    })
      .pipe(take(1))
      .subscribe(async () => {
        await this.router.navigate(["login"]);
      });
  }
}
