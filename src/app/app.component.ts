import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Google Map';
   lat: number = 28.375275;
  lng: number = 76.922610;

  //28.375275, 76.922610
}
