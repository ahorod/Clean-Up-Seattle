import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { UserService } from '../user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  title = 'Clean Up Seattle';
  items: FirebaseListObservable<any[]>;
  user: Observable<firebase.User>;
  userInfo: any;

  constructor(db: AngularFireDatabase, public afAuth: AngularFireAuth, private userService: UserService) {
    this.items = db.list('/items');
    this.user = afAuth.authState;
  }

  ngOnInit() {

  }

  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(response => {
      this.userService.userLogin(response.user.uid, response.user.displayName, response.user.email);
    });
  }

  logout() {
    this.afAuth.auth.signOut();
  }

}
