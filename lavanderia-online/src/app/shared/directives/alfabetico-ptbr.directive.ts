import { Directive, HostListener, ElementRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Directive({
  selector: '[alfabeticoPTBR]',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: AlfabeticoPTBRDirective,
    multi: true
  }]
})
export class AlfabeticoPTBRDirective implements ControlValueAccessor {
  onChange: any;
  onTouched: any;

  constructor(private el: ElementRef) { }

  @HostListener('input', ['$event.target.value'])
  onInput(value: any) {
    value = value.replace(/[^a-zA-Zà-úÀ-Ú\s]/g, '');
    this.el.nativeElement.value = value;
    this.onChange(value);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(value: any): void {
    if (value != null) {
      this.el.nativeElement.value = value;
    } else {
      this.el.nativeElement.value = '';
    }
  }
}
