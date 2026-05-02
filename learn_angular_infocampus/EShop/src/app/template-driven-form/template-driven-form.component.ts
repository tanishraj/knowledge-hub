import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss']
})
export class TemplateDrivenFormComponent implements OnInit {
  @ViewChild('frm') frm;
  
  FormData:Object;
  displayData:boolean = false;

  constructor() { }

  ngOnInit() {
  }

  displayRecords(){
    console.log("Form Values are: ", this.frm.value);
    this.FormData = this.frm.value;
    this.displayData = true;
  }

  reset(){
    this.frm.reset();
    this.displayData = false;
  }

}
