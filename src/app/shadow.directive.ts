import {
        Directive, HostListener, 
        ElementRef, Input, 
        Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appShadow]'
})
export class ShadowDirective {

  bool: boolean; 

  constructor(private elem: ElementRef, 
              private renderer: Renderer2) { }

  @Input() appShadow: string;
  @Input() appShadowX: string;
  @Input() appShadowY: string;
  @Input() appShadowBlur: string;

  @HostListener('mouseenter') onmouseover() {
    this.bool = true;
    this.hover(this.bool)
  }

  hover(shouldActivate: boolean) {
    if (shouldActivate) {
      console.log('After constructor.');
    }
  }

  ngOnInit() {
    let shadowStr = `${ this.appShadowX } ${ this.appShadowY } ${ this.appShadowBlur } ${ this.appShadow }`;
    this.renderer.setStyle(this.elem.nativeElement, 'box-shadow', shadowStr);
  }

}
