import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  encapsulation: ViewEncapsulation.Emulated
  // Internal Styles CSS
  // styles:[
  //   `
  //     .glyphicon{
  //       color: #f00;
  //       font-size: 40px;
  //       cursor: pointer;
  //     }
  //   `
  // ]
})
export class FavoriteComponent implements OnInit {
  @Input('isFavorite') isFavorite: boolean; // Component API input field
  @Output('change') click = new EventEmitter(); // Componenet API output field

  onClick(){
    this.isFavorite = !this.isFavorite;
    this.click.emit({newValue: this.isFavorite});
  }

  ngOnInit() {
  }

}

export interface FavoriteChangeEventArgs {
  newValue: boolean;
}
