import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {

  transform(value: string): any {
    if(!value) return null;

    let prepositions = ['of', 'the'];

    let words = value.split(" ");
    for (let i = 0; i < words.length; i++) {
      let word = words[i];
      if(i>0 && this.isPrepositions(word)){
        words[i] = word.toLowerCase();
      } else{
        words[i]  = this.toTitleCase(word);
      }
    }
    return words.join(' ');
  }

  private toTitleCase(word:string):string{
    return word.substr(0, 1).toUpperCase() + word.substr(1).toLowerCase();
  }

  private isPrepositions(word:string):boolean{
    let prepositions = [
      'of',
      'the'
    ];

    return prepositions.includes(word.toLowerCase());
  }

}
