import { Validator, NG_VALIDATORS, FormControl } from '@angular/forms';
import { Directive, OnInit } from '@angular/core';

@Directive({
  selector: '[minimoValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: MinimoValidatorDirective,
    multi: true
  }]
})
export class MinimoValidatorDirective implements Validator, OnInit {

  constructor() { }

  ngOnInit() { }
  
  validate(c: FormControl) {
    let v: number = +c.value;
    if (isNaN(v)) {
      return { 'minimo': true, 'requiredValue': 18 }
    }
    if (v < 18) {
      return { 'minimo': true, 'requiredValue': 18 }
    }
    return null;
  }
}
