import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private _places: Place[] = [
    // tslint:disable-next-line: max-line-length
    new Place('p1', 'Manhattan Mansion', 'In the heart of NYC', 'https://untappedcities.com/wp-content/uploads/2014/07/2-e-79th-st-Ukrainian-Institute-Harry-F.-Sinclair-House-Fifth-Avenue-NYC-1-1.jpg', 149.99),
    new Place('p2', 'Moon Yard', 'It\'s on the moon', 'http://editorial.designtaxi.com/news-3dmoonprint0102/1.jpg', 1049.99),
    // tslint:disable-next-line: max-line-length
    new Place('p3', 'Garden Shed', 'Shed in me back garden', 'https://www.wood-finishes-direct.com/blog/wp-content/uploads/2014/04/rundown-old-wood-shed.jpg', 4.99)
  ];

  get places() {
    return [...this.places];
  }

  constructor() { }
}
