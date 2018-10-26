import { Directive, ElementRef, Renderer, Input } from '@angular/core';

@Directive({
  selector: '[appSelectedColor]',
  host: {
    '(blur)': 'changeColor()'
  }
})
export class SelectedColorDirective {

  @Input('mySelectedColor') selectedColor: string;


  constructor(el: ElementRef, renderer: Renderer) {
    renderer.setElementStyle(el, 'backgroundColor', this.selectedColor);
  }

  changeColor(color: string) {
    console.log('Change Detection' + ' ' + this.selectedColor);
  }

}
