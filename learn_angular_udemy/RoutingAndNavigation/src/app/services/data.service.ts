import { AppError } from './../app-error/app-error';
import { BadRequestError } from './../app-error/bad-request-error';
import { NotFoundError } from './../app-error/not-found-error';
import { map, catchError } from 'rxjs/operators';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

@Injectable()

export class DataService{

	constructor(private baseURL: string, private http : Http){
	}

	getAll(){
		return this.http.get(this.baseURL).pipe(map(response => response.json()), catchError(this.handleError));
	}

	create(resource){
		return this.http.post(this.baseURL, JSON.stringify(resource)).pipe(map(response => response.json()), catchError(this.handleError));
	}

	delete(resource){
		return this.http.delete(this.baseURL+'/'+resource).pipe(map(response => response.json()), catchError(this.handleError));
	}

	private handleError(error: Response){
		if(error.status === 404){
			return throwError(new NotFoundError(error));
		}

		if(error.status === 400){
			return throwError(new BadRequestError(error));
		}

		return throwError(new AppError(error.json()));
	}
}