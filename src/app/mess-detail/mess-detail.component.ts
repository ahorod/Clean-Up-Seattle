import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Mess } from '../mess.model';
import { MessService } from '../mess.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-mess-detail',
  templateUrl: './mess-detail.component.html',
  styleUrls: ['./mess-detail.component.css']
})
export class MessDetailComponent implements OnInit {
  messId: string;
  mess;
  constructor(private router: Router, private route: ActivatedRoute, private messService: MessService) { }

  ngOnInit() {
    this.messId = this.route.snapshot.params['id'];
    this.messService.getMessesbyId(this.messId).subscribe(messFB =>{
      this.mess = messFB;
    });
  }

}
