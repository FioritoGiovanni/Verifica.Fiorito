import { Component, OnInit, Input} from '@angular/core';
import {Driving} from '../driving.model';
@Component({
  selector: 'app-driving-list',
  templateUrl: './driving-list.component.html',
  styleUrls: ['./driving-list.component.css']
})
export class DrivingListComponent implements OnInit {

  @Input() listaDriving:Driving[];

  constructor() { }

  ngOnInit(): void {
  }

}

