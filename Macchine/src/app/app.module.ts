import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { DrivingListComponent } from './driving-list/driving-list.component';
import { RentedComponent } from './rented/rented.component';

@NgModule({
  declarations: [
    AppComponent,
    DrivingListComponent,
    RentedComponent
  ],
  imports: [
    BrowserModule,
     HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
