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
  onClick(mezzoT: HTMLInputElement, mezzoD : HTMLInputElement, mezzoTar : HTMLInputElement, mezzoVM : HTMLInputElement) : boolean{
    console.log(`Adding article title: ${mezzoT} , ${mezzoD}, ${mezzoTar}, ${mezzoVM} `);
    return false;
  }

}

