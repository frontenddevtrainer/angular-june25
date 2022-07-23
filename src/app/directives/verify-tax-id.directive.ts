import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[verifyTaxId]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: VerifyTaxIdDirective,
    multi: true
  }]
})
export class VerifyTaxIdDirective implements Validator {

  @Input("verifyTaxId") controls !: string[]

  constructor() { }

  validate(form: AbstractControl<any, any>): ValidationErrors | null {

    if(this.controls)
      {
        const lastName = this.controls[0]
        const taxId = this.controls[1];
    
        const lastNameControl = form.get(lastName)?.value?.slice(0,1).toLowerCase()
        const taxIdControl = form.get(taxId)?.value?.slice(4,5).toLowerCase()

        if(lastNameControl === taxIdControl)
          {
            return null
          }
        
        return { taxid : true }
      }



    return null
  }

}
