import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { CardsGridComponent } from '../../components/cards-grid/cards-grid.component';
import { CardItemComponent } from '../../components/card-item/card-item.component';
import { ProductsPreviewComponent } from '../../components/products-preview/products-preview.component';

@Component({
    selector: 'app-home-page',
    imports: [HeroComponent, CardsGridComponent, ProductsPreviewComponent],
    templateUrl: './home-page.component.html',
    styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
