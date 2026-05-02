import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()

export class UsersListService{
	constructor(private httpClient : HttpClient) { }

	getUsersList(){
		return this.httpClient.get('https://jsonplaceholder.typicode.com/users');
	}
}