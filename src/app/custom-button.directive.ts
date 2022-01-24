import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appCustomButton]'
})
export class CustomButtonDirective implements OnInit {

  @Input() customBgColor: string = '#d32f2f';
  @Input() defaultBgColor: string = 'transparent';

  @HostBinding('style.backgroundColor') bgColor!: string;
  @HostBinding('style.color') color!: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.bgColor = this.customBgColor;
    this.color = '#fff';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.bgColor = this.defaultBgColor;
    this.color = this.customBgColor;
  }

  constructor(private el: ElementRef) {

    this.el.nativeElement.style.cursor='pointer';
    el.nativeElement.style.borderRadius = '6px'
  }

  ngOnInit(): void {
    this.el.nativeElement.style.border = `1px solid ${this.customBgColor}`
    this.color = this.customBgColor;
    this.bgColor = this.defaultBgColor;

  }

}
