import { Component, OnInit } from '@angular/core';
import { Mess } from '../mess.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MessService } from '../mess.service';
import { FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'app-mess-list-page',
  templateUrl: './mess-list-page.component.html',
  styleUrls: ['./mess-list-page.component.css'],

})
export class MessListPageComponent implements OnInit {
  messes: FirebaseListObservable<any[]>;

  constructor(private route:ActivatedRoute, private router: Router,  private messService: MessService) { }

  ngOnInit() {
  }


}
