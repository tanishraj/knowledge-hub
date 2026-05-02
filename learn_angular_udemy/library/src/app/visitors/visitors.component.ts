import { Component, OnInit } from '@angular/core';
import { VisitorsService } from '../visitors.service';

@Component({
  selector: 'visitors',
  templateUrl: './visitors.component.html',
  styleUrls: ['./visitors.component.css']
})
export class VisitorsComponent implements OnInit {
  visitors;
  isActive:boolean = false;
  constructor(service: VisitorsService) { 
    this.visitors = service.getVisitors();
  }

  onSave = function ($event) {
    $event.stopPropagation();
    console.log("Event has been captured.");
  }

  onSpanClick($event){
    console.log("Span event is captured.");
  }

  submitForm(){
    console.log("Form is submitted.");
  }

  fetchValue(email){
    console.log(email)
  }

  text = "This is the default text";
  fetchValueTwoWay(){
    console.log(this.text);
  }

  textBetter = "This is better text";
  fetchValueBetter(){
    console.log(this.textBetter);
  }

  ngOnInit() {
  }

}
