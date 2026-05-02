import { Http } from '@angular/http';
import { Observable } from "rxjs";
import { Injectable } from '@angular/core';

@Injectable()

export class ObservableService{

    constructor(private http: Http) {}

    //Manual serve delay reponse has been implemented through setTimeOut() functiokn
    getRecords(){
        return new Observable((observer) => {
            setTimeout(function(){
                observer.next(100)
            }, 1000)

            setTimeout(function(){
                observer.next(300)
            }, 2000)

            setTimeout(function(){
                observer.next(700)
            }, 4000)

            setTimeout(function(){
                observer.complete()
            }, 10000)
        })
    }


    // Pulling data from API using observable
    fetchUsersFromAPI(){
        return this.http.get('https://jsonplaceholder.typicode.com/users');
    }

}