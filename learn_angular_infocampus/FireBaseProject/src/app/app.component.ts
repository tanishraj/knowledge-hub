import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FireBaseProject';
  private courses : any[] = [];

  constructor(private db: AngularFireDatabase) { 
    db.list('/courses').valueChanges().subscribe(
      res => {
        this.courses = res;
        console.log(this.courses);
      }
    )
  }


}
