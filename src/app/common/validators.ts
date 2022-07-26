import { AbstractControl, ValidationErrors } from "@angular/forms";

export function checkPasswords(group: AbstractControl): ValidationErrors | null {
  const password = group.get("password")?.value;
  const repeatPassword = group.get("repeatPassword")?.value;
  console.log(password, repeatPassword, "prdel");
  return password === repeatPassword ? null : { differentPasswords: true };
}
