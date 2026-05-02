import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardsService {
  title = "Custom Pipe Example";
  supportText = "This paragraph contains the specific information about the Custom Pipes and this pipe will help you with restrict the characters appearing in this section.";
  button = "Like";
}
