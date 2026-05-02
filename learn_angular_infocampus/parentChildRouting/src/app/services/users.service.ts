import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()

export class UsersService {
	constructor(private http : Http){ }

	getUsersListFromApi(){
		return this.http.get('http://jsonplaceholder.typicode.com/users');
	}
}