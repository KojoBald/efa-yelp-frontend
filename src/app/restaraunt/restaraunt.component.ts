import { Component, OnInit, Input } from '@angular/core';
import { Business } from '../BusinessModel';

@Component({
  selector: 'app-restaraunt',
  templateUrl: './restaraunt.component.html',
  styleUrls: ['./restaraunt.component.scss']
})
export class RestarauntComponent implements OnInit {
  @Input('business') business: Business
  constructor() { }

  ngOnInit() {
  }

}
