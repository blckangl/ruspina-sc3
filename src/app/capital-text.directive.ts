import {AfterViewInit, Directive, ElementRef, HostBinding, OnInit} from '@angular/core';

@Directive({
  selector: '[appCapitalText]'
})
export class CapitalTextDirective implements AfterViewInit {

  constructor(private el: ElementRef) {
  }


  ngAfterViewInit(): void {

    let textContentArray = this.el.nativeElement.innerText.trim().split('')
    let firstChar = textContentArray.shift();
    this.el.nativeElement.innerText = firstChar.toUpperCase() + textContentArray.join('');

  }

}
