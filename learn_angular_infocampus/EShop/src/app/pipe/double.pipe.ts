import { PipeTransform, Pipe } from "@angular/core";

@Pipe({name: 'double'})

export class DoublePipe implements PipeTransform{
    transform(t1){
        return t1*2;
    }
}