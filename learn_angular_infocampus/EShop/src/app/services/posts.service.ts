import { Injectable } from "@angular/core";

@Injectable()

export class PostsService{
    private postsURL:string = "https://jsonplaceholder.typicode.com/posts";

    constructor(){}
}