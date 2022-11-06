import { Component } from '@angular/core';
import SwiperCore, {  Keyboard, Pagination, SwiperOptions, Zoom, EffectCreative } from 'swiper';

SwiperCore.use([Zoom, EffectCreative]);

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  config: SwiperOptions = {
    slidesPerView: 2.3,
    spaceBetween: 20
  };
  configPopular: SwiperOptions = {
    slidesPerView: 1.8,
    spaceBetween: 10
  };
  constructor() {}

}
