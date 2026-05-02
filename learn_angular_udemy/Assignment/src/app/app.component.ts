import { Component } from '@angular/core';
import { FavoriteChangeEventArgs } from './favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  post = {
    title: 'Title',
    isFavorite: false
  }

  onFavoriteChange(eventArgs : FavoriteChangeEventArgs){
    console.log("Hello, On favorite changed. ", eventArgs);
  }
}