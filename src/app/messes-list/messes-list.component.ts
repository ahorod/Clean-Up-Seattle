import { Component, OnInit } from '@angular/core';
import { Mess } from '../mess.model';

@Component({
  selector: 'app-messes-list',
  templateUrl: './messes-list.component.html',
  styleUrls: ['./messes-list.component.css']
})
export class MessesListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  messes: Mess[] = [
      new Mess('seattle','http://content.animalnewyork.com/wp-content/uploads/trash_1120_14.jpg', '1 hour', '6/19/17', 'Leonard'),
      new Mess('seattle','http://mediad.publicbroadcasting.net/p/ksor/files/styles/medium/public/201610/trash_to_treasure_washed_ashore.png', '1/2 hour', '6/19/17', 'Petunia')
  ];
}
