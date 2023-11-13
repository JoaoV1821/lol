import { Validator, NG_VALIDATORS, FormControl } from '@angular/forms';
import { Directive, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[minimoValidatorParametro]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: MinimoValidatorParametroDirective,
    multi: true
  }]
})
export class MinimoValidatorParametroDirective implements Validator, OnInit {

  @Input("valorMinimo") valorMinimo: string = "0";

  constructor() { }

  ngOnInit() { }

  validate(c: FormControl) {
    let v: number = +c.value;
    if (isNaN(v)) {
      return { 'minimo': true, 'requiredValue': +this.valorMinimo }
    }
    if (v < +this.valorMinimo) {
      return { 'minimo': true, 'requiredValue': +this.valorMinimo }
    }
    return null;
  }
}

// <input type="text" class="form-control" id = "idade" numerico required
//         minimoValidatorParametro valorMinimo = "18"  >