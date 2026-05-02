import { Component, OnChanges, OnInit, DoCheck, AfterContentChecked, AfterContentInit, AfterViewInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges, OnInit, DoCheck, AfterContentChecked,AfterContentInit, AfterViewInit, AfterViewChecked{
  title = 'LifeCycleHooks';

  constructor(){
    console.log("Inside the constructor");
  }

  ngOnChanges(){
    console.log("Inside the ngOnChanges");
  }

  ngOnInit(){
    console.log("Inside the ngOnInit");
  }

  ngDoCheck(){
    console.log("Inside the ngDoCheck");
  }

  ngAfterContentInit(){
    console.log("Inside the ngAfterContentInit");
  }

  ngAfterContentChecked(){
    console.log("Inside the ngAfterContentInit");
  }

  ngAfterViewInit(){
    console.log("Inside the ngAfterViewInit");
  }

  ngAfterViewChecked(){
    console.log("Inside the ngAfterViewChecked");
  }
}
