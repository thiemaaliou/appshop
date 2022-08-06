import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  slideOpts = {
    initialSlide: 0,
    slidesPerView: 2.3,
    speed: 400,
    pager: false,
    pagination: false,
    spaceBetween: 20,
  };
  constructor() {}

}
