import { CardsService } from './../cards.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  title: string;
  supportText: string;
  button: string;
  
  constructor(service: CardsService) {
    this.title = service.title;
    this.supportText = service.supportText;
    this.button = service.button;
  }

  ngOnInit() {
  }

}
