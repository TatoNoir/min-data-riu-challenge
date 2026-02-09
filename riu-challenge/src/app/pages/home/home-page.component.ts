import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { CardsGridComponent } from '../../components/cards-grid/cards-grid.component';
import { CardItemComponent } from '../../components/card-item/card-item.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [HeroComponent, CardsGridComponent, CardItemComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
