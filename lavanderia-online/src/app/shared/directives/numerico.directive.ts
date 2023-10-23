import { Directive, HostListener, ElementRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Directive({
  selector: '[numerico]',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: NumericoDirective,
      multi: true,
    },
  ],
})
export class NumericoDirective implements ControlValueAccessor {
  constructor(private el: ElementRef) {}

  onChange: any;
  onTouched: any;

  @HostListener('input', ['$event.target.value'])
  onInput(value: any): void {
    const numericValue = value.replace(/[\D]/g, '');
    this.el.nativeElement.value = numericValue;
    this.onChange(numericValue);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  writeValue(value: any): void {
    if (value !== undefined) {
      this.el.nativeElement.value = value;
    }
  }
}
