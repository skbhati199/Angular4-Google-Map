import { Component } from '@angular/core';
import {LatLngLiteral} from '@agm/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Google Map';
    // google maps zoom level
  zoom: number = 8;
  
  // initial center position for the map
  lat: number = 51.673858;
  lng: number = 7.815982;
 markers: marker[] = [
	  {
		  lat: 51.673858,
		  lng: 7.815982,
		  label: 'A',
		  draggable: true
	  },
	  {
		  lat: 51.373858,
		  lng: 7.215982,
		  label: 'B',
		  draggable: false
	  },
	  {
		  lat: 51.723858,
		  lng: 7.895982,
		  label: 'C',
		  draggable: true
	  }
  ]

   paths: Array<LatLngLiteral> = [
     { lat: 28.45654,  lng: 76.514565 },
     { lat: 26.25456,  lng: 78.54687 },
      { lat: 26.145678, lng: 76.1245 }
    ]
  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }

  
  
  mapClicked($event: MouseEvent) {
    console.log("Clicked!");
  }

}
interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
}