import { BooksService } from './../books.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books;
  summary;

  constructor(service: BooksService) {
    this.books = service.getBooksInfo();
    this.summary = service.getSummary();
  }

  ngOnInit() {
  }

}
