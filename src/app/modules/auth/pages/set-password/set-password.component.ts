import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

import {checkPasswords} from "../../../../common/validators";

@Component({
  selector: 'app-set-password',
  templateUrl: 'set-password.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SetPasswordComponent {
  form = this.formBuilder.nonNullable.group(
    {
      password: ["", [Validators.required, Validators.minLength(8)]],
      repeatPassword: ["", [Validators.required, Validators.minLength(8)]],
    },
    {
      validators: [checkPasswords],
    }
  );

  constructor(private formBuilder: FormBuilder) {
  }

  get password() {
    return this.form.get("password");
  }

  get repeatPassword() {
    return this.form.get("repeatPassword");
  }

  onSubmit() {
    // ...
  }
}
