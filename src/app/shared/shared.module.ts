import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperModule } from 'swiper/angular';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SwiperModule
  ],
  exports: [
    SwiperModule
  ]
})
export class SharedModule { }