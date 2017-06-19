import { Injectable } from '@angular/core';
import { Mess } from './mess.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class MessService {
  messes: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.messes = database.list('messes');
  }

  getMesses() {
    return this.messes;
  }

  addMess(newMess: Mess) {
    this.messes.push(newMess);
  }

  getMessesbyId(id){
    return this.database.object('/messes/' + id);
  }
  }
