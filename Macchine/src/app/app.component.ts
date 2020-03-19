import { Component } from '@angular/core';
import { Driving } from './driving.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Macchine';

  data:Driving;
  listDriving : Driving [];
  obs : Observable<Driving[]>;

  constructor(public http: HttpClient){

  }
  ngOnInit() {
    this.listDriving= new Array <Driving>();
    this.obs=this.http.get<Driving[]>('https://my-json-server.typicode.com/malizia-g/fine_anno_exp/mezzi')
    this.obs.subscribe(this.getDriving);
  }
  getDriving = (data : Driving []) =>
  {
    this.listDriving =data;
  }
}
