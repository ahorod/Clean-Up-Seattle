import { Component, OnInit } from '@angular/core';
import { MessService } from '../mess.service';
import { Mess } from '../mess.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mess-add',
  templateUrl: './mess-add.component.html',
  styleUrls: ['./mess-add.component.css']
})
export class MessAddComponent implements OnInit {

  constructor(private messService: MessService, private router: Router) { }

  ngOnInit() {
  }

submitForm(location: string, image: string, completionTime: string, date: string, name: string) {
   var newMess: Mess = new Mess(location, image, completionTime, date, name);
    this.messService.addMess(newMess);
    this.router.navigate(['mess-list-page']);
  }


}
