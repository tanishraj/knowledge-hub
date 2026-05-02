import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'delete-data',
  templateUrl: './delete-data.component.html',
  styleUrls: ['./delete-data.component.css']
})
export class DeleteDataComponent implements OnInit {

  posts:any[];
  private baseUrl : string = "https://jsonplaceholder.typicode.com/posts";

  constructor( private http : Http) {
    http.get(this.baseUrl).subscribe(
      (response) => {
        this.posts = response.json();
      }
    )
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

  deletePost(post){
    this.http.delete(this.baseUrl + '/' + post.id).subscribe(
      (response) => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      }
    )
  }

  ngOnInit() {
  }

}
