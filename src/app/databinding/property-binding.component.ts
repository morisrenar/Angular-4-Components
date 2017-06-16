import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-property-binding',
  template: `
    Result is:  {{result}}
  `,
  styles: [],
  inputs: ['result']
})
export class PropertyBindingComponent implements OnInit {

  result = 0;
  
  constructor() { }

  ngOnInit() {
  }

}
