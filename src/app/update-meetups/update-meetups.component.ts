import { Component, Input, OnInit } from '@angular/core';
import { MessService } from '../mess.service';

@Component({
  selector: 'app-update-meetups',
  templateUrl: './update-meetups.component.html',
  styleUrls: ['./update-meetups.component.css']
})
export class UpdateMeetupsComponent implements OnInit {
  @Input() selectedMeetup;

  constructor(private messService: MessService) { }

  ngOnInit() {
  }

  beginUpdatingMeetup(meetupToUpdate){
    this.messService.updateMeetup(meetupToUpdate);
  }
}
