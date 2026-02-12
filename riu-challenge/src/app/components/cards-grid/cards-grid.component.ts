import { Component } from '@angular/core';
import { CardItemModel } from '../../models/card-item.model';
import { CardItemComponent } from "../card-item/card-item.component";

@Component({
    selector: 'app-cards-grid',
    imports: [CardItemComponent],
    templateUrl: './cards-grid.component.html',
    styleUrl: './cards-grid.component.scss'
})
export class CardsGridComponent {

  cards: CardItemModel[] = ([
    {
      id: '1',
      category: 'Lorem ipsum dolor sit amet.',
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Ut et.',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id.',
      imageUrl: '',
      imageAlt: ''
    },
    {
      id: '2',
      category: 'Lorem ipsum dolor sit amet.',
      title: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id.',
      imageUrl: '',
      imageAlt: ''
    },
    {
      id: '3',
      category: 'Lorem ipsum dolor sit amet.',
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Ut et.',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id.',
      imageUrl: '',
      imageAlt: ''
    },
    {
      id: '4',
      category: 'Lorem ipsum dolor sit amet.',
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Ut et.',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id.',
      imageUrl: '',
      imageAlt: ''
    },
    {
      id: '5',
      category: 'Lorem ipsum dolor sit amet.',
      title: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id.',
      imageUrl: '',
      imageAlt: ''
    },
    {
      id: '6',
      category: 'Lorem ipsum dolor sit amet.',
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Ut et.',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id.',
      imageUrl: '',
      imageAlt: ''
    },
  ]);

}
