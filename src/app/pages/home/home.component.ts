import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  images = ['Berlin_friends', 'Sveti', 'Yas'].map((n) => `../../../assets/photos/${n}.jpg`);

  constructor(carouselConfig: NgbCarouselConfig) { 
    // carouselConfig.interval = 3000;
    // carouselConfig.pauseOnHover = true;
    carouselConfig.pauseOnFocus = true;
    carouselConfig.showNavigationIndicators = false;
  }
  
  ngOnInit(): void {
  }

}
