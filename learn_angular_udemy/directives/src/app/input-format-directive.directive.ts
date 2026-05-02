import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirectiveDirective {
  @Input('appInputFormat') format;
  @Input('format') expilicitFormat;

  constructor(private el: ElementRef) { }

  @HostListener('blur') onBlur() {
    let value = this.el.nativeElement.value;
    
    if(this.format == "lowerCase" || this.expilicitFormat == "lowerCase"){
      this.el.nativeElement.value = value.toLowerCase();
    } else if(this.format == "upperCase" || this.expilicitFormat == "upperCase"){
      this.el.nativeElement.value = value.toUpperCase();
    }
  }

}
