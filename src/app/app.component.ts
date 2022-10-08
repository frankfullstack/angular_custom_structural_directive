import { Component, OnInit } from '@angular/core';
import { finalize, Observable } from 'rxjs';
import { Gender, User } from './models/user';
import { UserService } from './service/user.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  loading = false;
  users: User[];

  constructor(private readonly userService: UserService) {}

  ngOnInit(): void {
    this.loading = true;
    this.userService
      .getUsers()
      .pipe(finalize(() => (this.loading = false)))
      .subscribe((users) => {
        this.users = users;
      });
  }

  isMale(item: User): boolean {
    return item.gender === Gender.Male;
  }

  isFemale(item: User): boolean {
    return item.gender === Gender.Female;
  }
}
