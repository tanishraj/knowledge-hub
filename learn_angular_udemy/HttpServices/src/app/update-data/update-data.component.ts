import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'update-data',
  templateUrl: './update-data.component.html',
  styleUrls: ['./update-data.component.css']
})
export class UpdateDataComponent implements OnInit {

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

  updatePost(post){
    this.http.patch(this.baseUrl + '/' + post.id, JSON.stringify({ isRead : true })).subscribe(
      (response) => {
        console.log(response.json());
      }
    )
  }

}
