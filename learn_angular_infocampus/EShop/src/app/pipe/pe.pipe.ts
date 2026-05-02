import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name: 'pe'})

export class PePipe implements PipeTransform{
    transform(t1, t2){
        return t1*t2*9.18;
    }
}