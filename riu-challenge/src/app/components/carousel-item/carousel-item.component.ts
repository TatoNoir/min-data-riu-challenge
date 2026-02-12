import { Component,input } from '@angular/core';
import { CarouselItemModel } from '../../models/carousel.item.model';
import { NgOptimizedImage } from '@angular/common';


@Component({
    selector: 'app-carousel-item',
    imports: [NgOptimizedImage],
    templateUrl: './carousel-item.component.html',
    styleUrl: './carousel-item.component.scss'
})
export class CarouselItemComponent {
  readonly carouselItem = input.required<CarouselItemModel>();

}
