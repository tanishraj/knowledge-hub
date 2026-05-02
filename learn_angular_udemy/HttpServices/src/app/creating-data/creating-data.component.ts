import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'creating-data',
  templateUrl: './creating-data.component.html',
  styleUrls: ['./creating-data.component.css']
})
export class CreatingDataComponent implements OnInit {

  posts:any[];
  private baseUrl : string = "https://jsonplaceholder.typicode.com/posts";

  constructor( private http : Http) {
    http.get(this.baseUrl).subscribe(
      (response) => {
        this.posts = response.json();
      }
    )
  }

  ngOnInit() {
  }

  createPost(input : HTMLInputElement){
    let post = {title : input.value}
    this.http.post(this.baseUrl, JSON.stringify(post)).subscribe(
      (response) => {
        post['id'] = response.json().id;
        this.posts.splice(0,0, post);
      }
    )
  }

}
