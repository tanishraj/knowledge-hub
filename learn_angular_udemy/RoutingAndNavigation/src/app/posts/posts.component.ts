import { NotFoundError } from './../app-error/not-found-error';
import { AppError } from './../app-error/app-error';
import { BadRequestError } from './../app-error/bad-request-error';
import { PostsService } from './../services/posts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts : any[];

  constructor(private postService : PostsService) { }

  ngOnInit() {
    this.postService.getAll().subscribe(
      (posts) => {
        this.posts = posts;
      }
    )
  }

  createPost(input : HTMLInputElement){
    let post = { title: input.value};
    this.posts.unshift(post);
    input.value = "";

    this.postService.create(post).subscribe(
      (createPost) => {
        post['id'] = createPost.id;
      },
      (error: AppError) => {
        this.posts.shift();
        if(error instanceof BadRequestError){
          console.log("Bad request has been made.");
        } else{
          throw error;
        }
      }
    )
  }

  deletePost(post){
    this.postService.delete(post.id).subscribe(
      () => {
        this.posts.splice(this.posts.indexOf(post), 1);
      },
      (error : AppError) => {
        if(error instanceof NotFoundError){
          alert("This post is already deleted.");
        }
      }
    )
  }

}
