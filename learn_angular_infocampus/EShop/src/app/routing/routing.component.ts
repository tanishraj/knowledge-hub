import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-routing',
  templateUrl: './routing.component.html',
  styleUrls: ['./routing.component.scss']
})
export class RoutingComponent implements OnInit {

  constructor(private x: ActivatedRoute) { }

  ngOnInit() {
    this.x.params.subscribe(
      (res) => {
        console.log("The parameter is =" + res['val']);
      }
    )
  }

}
