import { Component, input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

import { CardItemModel } from '../../models/card-item.model';

@Component({
    selector: 'app-card-item',
    imports: [NgOptimizedImage],
    templateUrl: './card-item.component.html',
    styleUrl: './card-item.component.scss'
})
export class CardItemComponent {
  readonly cardItem = input.required<CardItemModel>();

}
