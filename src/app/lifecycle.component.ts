import {
  AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy,
  OnInit, ViewChild
} from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  template: `
    <ng-content></ng-content>
    <hr>
    <p #boundParagraph>{{bindable}}</p>
    <p> {{boundParagraph.textContent}} </p>
  `,
  styles: []
})
export class LifecycleComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit,
 AfterViewChecked, OnDestroy {
  
  @Input() bindable = 1000;
  @ViewChild('boundParagraph') boundParagraph: HTMLElement;
  
  ngOnChanges(): void {
    this.log('on changes');
  }
  
  ngDoCheck(): void {
    this.log('on check');
  }
  
  ngAfterContentInit(): void {
    this.log('after content init');
  }
  
  ngAfterContentChecked(): void {
    this.log('after content checked');
    console.log(this.boundParagraph);
  }
  
  ngAfterViewInit(): void {
    this.log('after view init');
    console.log(this.boundParagraph);
  }
  
  ngAfterViewChecked(): void {
    this.log('after view checked');
  }
  
  ngOnDestroy(): void {
    this.log('on destroy');
  }

  constructor() {
    this.log('constructor');
  }
  
  ngOnInit() {
    this.log('on init');
  }
  
  private log(hook: string) {
    console.log(hook);
  }

}
