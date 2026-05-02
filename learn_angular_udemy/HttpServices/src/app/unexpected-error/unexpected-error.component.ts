import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'unexpected-error',
  templateUrl: './unexpected-error.component.html',
  styleUrls: ['./unexpected-error.component.css']
})
export class UnexpectedErrorComponent implements OnInit {

  posts: any[];

  constructor(private postService : PostService) {

  }

  createPost(input: HTMLInputElement) {
    let post = { title: input.value }
    this.postService.createPost(post).subscribe(
      (response) => {
        post['id'] = response.json().id;
        this.posts.splice(0, 0, post);
      },
      (error) => {
        console.log("An unexpected error occured.", error);
      }
    )
  }

  updatePost(post) {
    this.postService.updatePost(post).subscribe(
      (response) => {
        console.log(response.json());
      },
      (error) => {
        console.log("An unexpected error occured.", error);
      }
    )
  }

  deletePost(post) {
    this.postService.deletePost(post).subscribe(
      (response) => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      },
      (error : Response) => {
        if(error.status === 404){
          console.log("Post is already deleted.");
        } else{
          console.log("An unexpected error occured.", error);
        }
      }
    )
  }
  
  ngOnInit() {
    this.postService.getPosts().subscribe(
      (response) => {
        this.posts = response.json();
      },
      (error) => {
        console.log("An unexpected error occured.", error);
      }
    )
  }

}
