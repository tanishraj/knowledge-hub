import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  getBooksInfo(){
    return ["Mathematics", "English", "Hindi", "History", "Physics", "Chemistry"];
  }

  getSummary(){
    return "This is a summary paragraph. This is a summary paragraph. This is a summary paragraph. This is a summary paragraph. This is a summary paragraph. This is a summary paragraph. This is a summary paragraph. ";
  }
}
