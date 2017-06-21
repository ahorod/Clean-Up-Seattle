import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  constructor(db: AngularFireDatabase, public afAuth: AngularFireAuth, private userService: UserService) {
    this.items = db.list('/items');
    this.user = afAuth.authState;
  }

  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(response => {
      console.log(response);
      // this.userName = response.user.displayName;

    });
  }

  logout() {
    this.afAuth.auth.signOut();

  ngOnInit() {
  }
}
