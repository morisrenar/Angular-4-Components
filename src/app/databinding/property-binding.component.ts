import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-property-binding',
  template: `
    Result is:  {{result}}
  `,
  styles: []
})
export class PropertyBindingComponent implements OnInit {

  @Input() result = 0;
  
  constructor() { }

  ngOnInit() {
  }

}
