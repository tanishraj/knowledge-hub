import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()

export class PromiseService {
    results: object[];

    constructor(private http: Http) {
        this.results = [];
    }

    getUsers() {
        let promise = new Promise((resolve, reject) => {
            let apiURL:string = "https://jsonplaceholder.typicode.com/users";

            this.http.get(apiURL).toPromise().then(
                (res) => {
                    this.results =  res.json();
                    resolve();
                },

                (msg) => {
                    console.log("Something went wrong", reject(msg));
                }
            )
        });

        return promise;
    }

    // Add Function Promises
    add(a, b) {
        let c = 0;
        return new Promise((resolve, reject) => {
            setTimeout(function () {
                c = a + b;
                resolve(c);
            }, 1000);
        })
    }
}