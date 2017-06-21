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

  // addUser(userId, newName, newEmail) {
  //   var triggerAdd = false;
  //   this.users.subscribe(dataLastEmittedFromObserver => {
  //     this.allUsers = dataLastEmittedFromObserver;
  //     .forEach(user => {
  //       console.log('user in firebase', user)
  //       if(user.uid !== userId) {
  //         return triggerAdd = true;
  //       } else {
  //         console.log('user already exists')
  //       }
  //     });
  //     if(triggerAdd === true) {
  //       this.newUser = new User(newName, newEmail, userId);
  //       console.log('newUser in loop', this.newUser)
  //       console.log('users pre push', this.users)
  //     }
  //   });
  //   console.log('newUser outside loop', this.newUser)
  //   console.log('users post push', this.users)
  // }

  userLogin(userId, newName, newEmail) {
    // var triggerAdd = false;
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

  // addUser(userName, userEmail, userId) {
    // if this.database.object('users')
    // var newUser: User = new User(userName, userEmail, userId);
    // this.users.push(newUser);
  // }

  userLogin(userId) {
    this.database.object('members/' + userId).subscribe(user => {
      this.activeUser = user;
    });
    console.log(this.activeUser)
  }

}
