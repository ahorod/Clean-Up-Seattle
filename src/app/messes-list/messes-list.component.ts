import { Component, OnInit } from '@angular/core';
import { Mess } from '../mess.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MessService } from '../mess.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-messes-list',
  templateUrl: './messes-list.component.html',
  styleUrls: ['./messes-list.component.css']
})
export class MessesListComponent implements OnInit {
 messes: FirebaseListObservable<any[]>;

  constructor(private route:ActivatedRoute, private router: Router,  private messService: MessService) { }

  ngOnInit() {
    this.messes = this.messService.getMesses();
  }

  renderDetail(clickedMess){
    this.router.navigate(['messes', clickedMess.$key]);
  }
}
