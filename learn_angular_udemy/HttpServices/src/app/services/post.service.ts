import { BadRequestError } from './../common/bad-request-error';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-Error';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PostService {
  
  private baseUrl: string = "https://asdjsonplaceholder.typicode.com/posts";

  constructor(private http: Http) { }

  getPosts(){
    return this.http.get(this.baseUrl).pipe(map(res => res), catchError(this.errorHandler));
  }

  createPost(post){
    return this.http.post(this.baseUrl, JSON.stringify(post)).pipe(map((res => res), catchError(this.errorHandler)));
  }

  updatePost(post){
    return this.http.patch(this.baseUrl + '/' + post.id, JSON.stringify({ isRead: true }));
  }

  deletePost(post){
    return this.http.delete(this.baseUrl + '/' + post.id).pipe(map(res => res), catchError(this.errorHandler));
  }

  private errorHandler(error: Response){
    if(error.status === 404)
        return throwError(new NotFoundError(error.json()));

    if(error.status === 400)
      return throwError(new BadRequestError(error.json()));

    return throwError(new AppError(error.json()));
  }
}
