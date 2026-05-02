import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name: 'myLimit'})

export class ArrayLimit implements PipeTransform{
    transform(t1, t2){
        let tempArray:any[] = [];

        for(let i=0; i<t2; i++){
            tempArray.push(t1[i]);
        }

        return tempArray;
    }
}