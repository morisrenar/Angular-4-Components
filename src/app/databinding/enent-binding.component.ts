import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enent-binding',
  template: `
  <button (click)="onClicked()">Click Me !!!</button>
  `,
  styles: []
})
export class EnentBindingComponent implements OnInit {

  onClicked() {
    alert('It Worked.');
  }
  
  constructor() { }

  ngOnInit() {
  }

}
