import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ng-on-init',
  templateUrl: './ng-on-init.component.html',
  styleUrls: ['./ng-on-init.component.css']
})
export class NgOnInitComponent implements OnInit {

  posts: any[];
  private baseUrl: string = "https://jsonplaceholder.typicode.com/posts";

  constructor(private http: Http) {

  }

  createPost(input: HTMLInputElement) {
    let post = { title: input.value }
    this.http.post(this.baseUrl, JSON.stringify(post)).subscribe(
      (response) => {
        post['id'] = response.json().id;
        this.posts.splice(0, 0, post);
      }
    )
  }

  updatePost(post) {
    this.http.patch(this.baseUrl + '/' + post.id, JSON.stringify({ isRead: true })).subscribe(
      (response) => {
        console.log(response.json());
      }
    )
  }

  deletePost(post) {
    this.http.delete(this.baseUrl + '/' + post.id).subscribe(
      (response) => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      }
    )
  }
  
  ngOnInit() {
    this.http.get(this.baseUrl).subscribe(
      (response) => {
        this.posts = response.json();
      }
    )
  }

}
