import { CrudService } from './../services/crud.service';
import { BadRequestError } from './../common/bad-request-error';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-Error';
import { Component, OnInit } from '@angular/core';
import { throwError } from 'rxjs';

@Component({
  selector: 'error-handling-using-app-specific-error',
  templateUrl: './error-handling-using-app-specific-error.component.html',
  styleUrls: ['./error-handling-using-app-specific-error.component.css']
})
export class ErrorHandlingUsingAppSpecificErrorComponent implements OnInit {

  posts: any[];

  constructor(private postService : CrudService) {

  }

  createPost(input: HTMLInputElement) {
    let post = { title: input.value }
    this.posts.splice(0, 0, post);

    this.postService.create(post).subscribe(
      (newPost) => {
        post['id'] = newPost.id;
      },
      (error: AppError) => {
        this.posts.splice(0,1);

        if(error instanceof BadRequestError)
          console.log("You are making a bad request.");
        else
          throwError(error);
      }
    )
  }

  updatePost(post) {
    this.postService.update(post).subscribe(
      (updatedPost) => {
        console.log(updatedPost);
      }
    )
  }

  deletePost(post) {
    let index = this.posts.indexOf(post);
    this.posts.splice(index, 1);

    this.postService.delete(post.id).subscribe(
      null,
      (error : AppError) => {
        this.posts.splice(index, 0, post);

        if(error instanceof NotFoundError){
          console.log("Post is already deleted.");
        } else{
          throwError(error);
        }
      }
    )
  }
  
  ngOnInit() {
    this.postService.getAll().subscribe(
      posts => { this.posts = posts }
    )
  }

}
