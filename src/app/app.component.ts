import { GlobalService } from './../Services/global/global.service';
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
import { CartPopUpComponent } from '../Components/cart-pop-up/cart-pop-up.component';
import { CarouselComponent } from "../Components/home/crausel/crausel.component";
import { ToastComponent } from '../Components/toast/toast.component';
import { ToasteService } from '../Services/toaster/toaste.service';

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
    CartPopUpComponent,
    CarouselComponent,
    ToastComponent
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
  GlobalService = inject(GlobalService);
  toastService = inject(ToasteService);
  ngOnInit(): void {
    setTimeout(() => {
      this.shopService.isPopupShown = true;
      if (this.shopService.isPopupShown) {
        document.body.style.overflowX = 'hidden';
      }
    }, 2000);
  }
}
