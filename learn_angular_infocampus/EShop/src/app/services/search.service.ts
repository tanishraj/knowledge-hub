import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()

export class searchService{
    apiRoot: string = 'https://itunes.apple.com/search';
    results:object[];
    loading:boolean;

    constructor(private http: Http){
        this.results = [];
        this.loading = false;
    }

    searchItuneAPI(term:string){
        let promise = new Promise((resolve, reject) => {
            let apiURL = `${this.apiRoot}?term=${term}&media=music&limit=20`;
            this.http.get(apiURL)
            .toPromise()
            .then(
                res => {
                    console.log(res.json());
                    this.results = res.json().results;
                    resolve();
                },

                msg => {
                    reject(msg);
                }
            );
        });

        return promise;
    }
}