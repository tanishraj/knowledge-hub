import { Component } from '@angular/core';
import { MySuperService } from './services/mySuperService.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'toggleSideBar';

  constructor(private mySuperService : MySuperService){
    
  }
}
