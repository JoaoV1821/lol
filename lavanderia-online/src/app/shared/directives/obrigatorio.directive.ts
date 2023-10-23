import { Directive } from '@angular/core';
import { Validator, NG_VALIDATORS, FormControl, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[obrigatorio]',
  providers: [{
    provide:NG_VALIDATORS,
    useExisting: ObrigatorioDirective,
    multi: true
  }]
})
export class ObrigatorioDirective implements Validator{

  constructor() { }

  validate(control: FormControl): ValidationErrors | null {
    if(!control.value){
      return {'obrigatorio':true}
    }
    return null
  }; 

}
