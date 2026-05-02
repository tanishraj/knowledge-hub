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
export class DataService {

  constructor(private baseUrl:  string, private http: Http) { }

  getAll(){
    return this.http.get(this.baseUrl).pipe(map(res => res.json()), catchError(this.errorHandler));
  }

  create(resource){
    return this.http.post(this.baseUrl, JSON.stringify(resource)).pipe(map((res => res.json()), catchError(this.errorHandler)));
  }

  update(resource){
    return this.http.patch(this.baseUrl + '/' + resource.id, JSON.stringify({ isRead: true }));
  }

  delete(id){
    return this.http.delete(this.baseUrl + '/' + id).pipe(map(res => res.json()), catchError(this.errorHandler));
  }

  private errorHandler(error: Response){
    if(error.status === 404)
        return throwError(new NotFoundError(error.json()));

    if(error.status === 400)
      return throwError(new BadRequestError(error.json()));

    return throwError(new AppError(error.json()));
  }
}
