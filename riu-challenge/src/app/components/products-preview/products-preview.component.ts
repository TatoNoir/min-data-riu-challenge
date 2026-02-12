import { Component } from '@angular/core';
import { CarouselItemComponent } from '../carousel-item/carousel-item.component';
import { CarouselItemModel } from '../../models/carousel.item.model';

@Component({
    selector: 'app-products-preview',
    imports: [CarouselItemComponent],
    templateUrl: './products-preview.component.html',
    styleUrl: './products-preview.component.scss'
})
export class ProductsPreviewComponent {

items: CarouselItemModel[] = ([
    {
      id: '1',
      title: 'Lorem ipsum',
      description: 'Lorem ipsum dolor sit amet consectetur',
      imageUrl: '',
      imageAlt: '',
      downloadUrl:'',
      downloadLabel:''
    },
    {
      id: '2',
      title: 'Lorem ipsum',
      description: 'Lorem ipsum dolor sit amet consectetur',
      imageUrl: '',
      imageAlt: '',
      downloadUrl:'',
      downloadLabel:''
    },
    {
      id: '3',
      title: 'Lorem ipsum',
      description: 'Lorem ipsum dolor sit amet consectetur',
      imageUrl: '',
      imageAlt: '',
      downloadUrl:'',
      downloadLabel:''
    },
    {
      id: '4',
      title: 'Lorem ipsum',
      description: 'Lorem ipsum dolor sit amet consectetur',
      imageUrl: '',
      imageAlt: '',
      downloadUrl:'',
      downloadLabel:''
    },
    {
      id: '5',
      title: 'Lorem ipsum',
      description: 'Lorem ipsum dolor sit amet consectetur',
      imageUrl: '',
      imageAlt: '',
      downloadUrl:'',
      downloadLabel:''
    },
    {
      id: '6',
      title: 'Lorem ipsum',
      description: 'Lorem ipsum dolor sit amet consectetur',
      imageUrl: '',
      imageAlt: '',
      downloadUrl:'',
      downloadLabel:''
    },
  ]);

}
