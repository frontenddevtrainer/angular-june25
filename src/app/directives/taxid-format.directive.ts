import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[taxidFormat]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: TaxidFormatDirective,
      multi: true
    }
  ]
})
export class TaxidFormatDirective implements Validator {

  validate(control: AbstractControl<any, any>): ValidationErrors | null {

    const value = control.value as string;
    const formatRegex = /[a-zA-Z]{5}[0-9]{4}[a-zA-Z]{1}/

    if (value && value.match(formatRegex)) {
      return null
    }

    return { taxidFormat: true }

  }

  constructor() { }

}
