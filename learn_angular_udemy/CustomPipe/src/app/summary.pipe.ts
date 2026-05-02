import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'summary'
})
export class summaryPipe implements PipeTransform{
    transform(value:string, args?:number){
        if(!value)
        return null;
        
        let limit = (args) ? args : 50;
        return value.substr(0,limit) + '...';
    }
}