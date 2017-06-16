import {
  AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  template: `
    <p>
      lifecycle Works!
    </p>
  `,
  styles: []
})
export class LifecycleComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit,
 AfterViewChecked, OnDestroy {
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
  }
  
  ngAfterViewInit(): void {
    this.log('after view init');
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
