import { UsersService } from './../services/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  private users:any[] = [];
  private errorMessage: string = "";

  constructor(private usersService : UsersService) { }

  ngOnInit() {
    this.usersService.getUsersListFromApi().subscribe(
      (res) => {
        this.users = res.json();
      },
      (err) => {
        console.log("Something went wrong: " + err);
        this.errorMessage = "Something went wrong while pulling the API.";
      },
      () => {
        console.log("Everythign processed.");
      }
    )
  }

}
