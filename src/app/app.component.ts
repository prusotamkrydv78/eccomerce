import { AfterViewInit, Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeadingComponent } from '../Components/heading/heading.component';
import { gsap } from 'gsap';
import { FooterComponent } from '../Components/footer/footer.component';
import { ProductPageComponent } from '../Components/product-page/product-page.component';
import { PopupComponent } from '../Components/popup/popup.component';
import { ShopComponent } from '../Components/shop/shop.component';
import { ShopService } from '../Components/shopService/shop.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeadingComponent,
    FooterComponent,
    ProductPageComponent,
    PopupComponent,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements AfterViewInit, OnInit {
  title = 'kalles';
  this: any;
  ngAfterViewInit(): void {
    this.createTimeLine();
  }
  tl: any;
  public createTimeLine(): void {
    this.tl = gsap.timeline();
  }
  shopService = inject(ShopService);
  ngOnInit(): void {
    setTimeout(() => {
      this.shopService.isPopupShown = true;
      if (this.shopService.isPopupShown) {
        document.body.style.overflow = 'hidden';
      }
    }, 2000);
  }
}
