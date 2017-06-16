import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-enent-binding',
  template: `
  <button (click)="onClicked()">Click Me EB !!!</button>
  `,
  styles: []
})
export class EnentBindingComponent implements OnInit {

  @Output() clicked = new EventEmitter<string>();
  
  onClicked() {
    console.log('click in event binding');
    this.clicked.emit('It works');
  }
  
  constructor() { }

  ngOnInit() {
  }

}
