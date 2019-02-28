import { Component } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import states from './states'
import { Business } from './BusinessModel';

const url = 'https://efa-yelp.herokuapp.com'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  states: string[] = states;

  price: string = "1";
  term: string = '';
  city: string = '';
  state: string = this.states[0];

  business?: Business = null;

  constructor(private http: HttpClient) { }

  search() {
    this.http.get(url, {
      params: {
        price: this.price,
        term: this.term,
        location: `${this.city}, ${this.state}`
      }
    }).subscribe((business: Business) => this.business = business);
  }
}
