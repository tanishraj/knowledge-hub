import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'seperation-of-concern',
  templateUrl: './seperation-of-concern.component.html',
  styleUrls: ['./seperation-of-concern.component.css']
})
export class SeperationOfConcernComponent implements OnInit {

  posts: any[];

  constructor(private postService : PostService) {

  }

  createPost(input: HTMLInputElement) {
    let post = { title: input.value }
    this.postService.createPost(post).subscribe(
      (response) => {
        post['id'] = response.json().id;
        this.posts.splice(0, 0, post);
      }
    )
  }

  updatePost(post) {
    this.postService.updatePost(post).subscribe(
      (response) => {
        console.log(response.json());
      }
    )
  }

  deletePost(post) {
    this.postService.deletePost(post).subscribe(
      (response) => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      }
    )
  }
  
  ngOnInit() {
    this.postService.getPosts().subscribe(
      (response) => {
        this.posts = response.json();
      }
    )
  }

}
