import { Injectable } from '@angular/core';
import { User } from './user.model';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

@Injectable()
export class UserService {
  users: FirebaseListObservable<any[]>;
  activeUser: User;
  allUsers: User[];
  newUser: User;

  constructor(private database: AngularFireDatabase) {
    this.users = database.list('users');
  }

  userLogin(userId, newName, newEmail) {
    this.users.subscribe(usersData => {
      this.allUsers = usersData;
      for(var i = 0 ; i < this.allUsers.length ; i++) {
        if(this.allUsers[i].uid === userId) {
          this.activeUser = this.allUsers[i];
        }
      }
      if(this.activeUser === undefined) {
        this.newUser = new User(newName, newEmail, userId);
        this.users.push(this.newUser);
      }
    });
  }

  loginStatus() {
    console.log(this.activeUser)
  }

}
