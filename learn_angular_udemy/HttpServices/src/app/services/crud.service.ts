import { DataService } from './data.service';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CrudService extends DataService{
  
  constructor(http: Http) { 
    super("https://jsonplaceholder.typicode.com/posts", http);
  }

}
