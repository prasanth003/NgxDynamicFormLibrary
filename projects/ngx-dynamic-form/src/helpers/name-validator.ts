import { ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

export function namedValidator(name: string, validator: ValidatorFn): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const result = validator(control);
    if (!result) return null;

    const key = Object.keys(result)[0];
    const value = result[key];

    return {
      [key]: { ...value, name }
    };
  };
}