import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from "@angular/router";

import { RegisterService } from "../../services/register.service";
import { FormBuilder, Validators } from "@angular/forms";
import { checkPasswords } from "../../../../common/validators";

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
      firstName: ["", [Validators.required, Validators.minLength(2)]],
      lastName: ["", [Validators.required, Validators.minLength(2)]],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(8)]],
      repeatPassword: ["", [Validators.required, Validators.minLength(8)]],
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
    // @TODO register

    await this.router.navigate(["login"]);
  }
}
