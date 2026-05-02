import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent {
  names = [
    {id: 1, callingName: "Tanish"},
    { id: 2, callingName: "Ajay" },
    { id: 3, callingName: "Siam" },
    { id: 4, callingName: "Turum" }
  ];

  onAdd(){
    this.names.push({id:5, callingName:"New User"});
  }

  onDel(name){
    let delIndex = this.names.indexOf(name);
    this.names.splice(delIndex, 1);
  }
}
