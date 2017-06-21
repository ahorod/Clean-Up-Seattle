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
        console.log('current user in firebase', this.allUsers[i])
        if(this.allUsers[i].uid === userId) {
          console.log('user exists')
          this.activeUser = this.allUsers[i];
        }
      }
      if(this.activeUser === undefined) {
        console.log('adding new user')
        this.newUser = new User(newName, newEmail, userId);
        this.users.push(this.newUser);
      }
    });
  }

  // userLogin(userId) {
  //   this.database.object('members/' + userId).subscribe(user => {
  //     this.activeUser = user;
  //   });
  //   console.log(this.activeUser)
  // }

}
