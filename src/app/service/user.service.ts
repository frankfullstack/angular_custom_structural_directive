import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Gender, User } from '../models/user';

const USERS_LIST: User[] = [
  {
    id: 1,
    username: 'user.1',
    firstName: 'User-1',
    lastName: 'Lastname-1',
    age: 42,
    gender: Gender.Male,
  },
  {
    id: 2,
    username: 'user.2',
    firstName: 'User-2',
    lastName: 'Lastname-2',
    age: 40,
    gender: Gender.Female,
  },
  {
    id: 3,
    username: 'user.3',
    firstName: 'User-3',
    lastName: 'Lastname-3',
    age: 31,
    gender: Gender.Male,
  },
  {
    id: 4,
    username: 'user.4',
    firstName: 'User-4',
    lastName: 'Lastname-4',
    age: 20,
    gender: Gender.Male,
  },
  {
    id: 5,
    username: 'user.5',
    firstName: 'User-5',
    lastName: 'Lastname-5',
    age: 52,
    gender: Gender.Female,
  },
];

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor() {}

  getUsers(): Observable<User[]> {
    return of<User[]>(USERS_LIST).pipe(delay(2000));
  }
}
