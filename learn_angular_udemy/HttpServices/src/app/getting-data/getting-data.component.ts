import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'getting-data',
  templateUrl: './getting-data.component.html',
  styleUrls: ['./getting-data.component.css']
})
export class GettingDataComponent implements OnInit {

  posts:any[];

  constructor( http : Http) {
    http.get('https://jsonplaceholder.typicode.com/posts').subscribe(
      (response) => {
        this.posts = response.json();
      }
    )
  }

  ngOnInit() {
  }

}
