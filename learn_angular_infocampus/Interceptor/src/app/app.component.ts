import { UsersListService } from './services/usersList.service';

import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Interceptor';

  constructor(private usersService: UsersListService){
  }

  ngOnInit(){
    this.usersService.getUsersList().subscribe(
      (res) => {
        console.log("My data is : ", res);
      },

      (err) => {
        console.log(err);
      }
    )
  }
}
