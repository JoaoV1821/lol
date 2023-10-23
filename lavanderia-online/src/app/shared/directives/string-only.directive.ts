import { Directive, ElementRef, HostListener} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';


import { Input, OnInit } from '@angular/core';
import { Validator, NG_VALIDATORS, FormControl } from '@angular/forms';

@Directive({
  selector: '[stringOnly]',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: StringOnlyDirective,
    multi: true
  },{
    provide: NG_VALIDATORS,
    useExisting: StringOnlyDirective,
    multi: true
  }
]
})
export class StringOnlyDirective implements ControlValueAccessor, Validator{

  @Input("maxLength") maxLength : string = '255';

  constructor(private el : ElementRef) { }

  onChange : any;
  onTouched : any;

@HostListener('input', ['$event.target.value'])
  onInput(value: any): void {
    
    const newValue = value.replace(/[^\p{L}\s'-]/gu,'');
    this.el.nativeElement.value = newValue;
    this.onChange(newValue);
  }

  registerOnChange(fn : any) : void {
    this.onChange = fn;
  }
  registerOnTouched(fn : any) : void{
    this.onTouched = fn;
  }
  writeValue(value: any): void {
    if (value !== undefined) {
      this.el.nativeElement.value = value;
    }
  }

  validate(c : FormControl){
    if(c.value !== null && c.value !== undefined){
      let length : number = +c.value.length;
      if(length > +this.maxLength){
        return { 'maximo':true, 'requiredValue': +this.maxLength}
      }
    }
    return null;
  }

}
