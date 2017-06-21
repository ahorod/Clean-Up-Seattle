import { Injectable } from '@angular/core';
import { User } from './user.model';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

@Injectable()
export class UserService {
  users: FirebaseListObservable<any[]>;
  foundName: string;
  foundEmail: string;
  foundUid: number;
  activeUser: any;
  newUser: User;

  constructor(private database: AngularFireDatabase) {
    this.users = database.list('users');
  }

  // addUser(userId, newName, newEmail) {
  //   var triggerAdd = false;
  //   this.database.list('users').subscribe(allUsers => {
  //     allUsers.forEach(user => {
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

  addUser(userId, newName, newEmail) {
    // var triggerAdd = false;
    this.users.forEach(user => {
      console.log('user in firebase', user)
      if(user[0].uid !== userId) {
        console.log('adding new user')
        this.newUser = new User(newName, newEmail, userId);
        console.log('newUser in if', this.newUser)
      } else {
        console.log('user already exists')
      }
    }).then(function() {
      console.log('newUser outside loop after then', this.newUser)
      });
    // this.users.push(this.newUser);
    console.log('newUser outside loop', this.newUser)
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
