import { Component, OnInit } from '@angular/core';
import { Mess } from '../mess.model';
import { MessService } from '../mess.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

}
