import { Injectable, OnInit, inject } from '@angular/core';
import ProductData from '../../ProductDatas';
import { Router } from '@angular/router';
import { GlobalService } from './../../Services/global/global.service';

@Injectable({
  providedIn: 'root',
})
export class ShopService implements OnInit {
  router = inject(Router);

  stopEventPropagation(event: Event) {
    event.stopPropagation();
  }
  constructor() {}
  ngOnInit(): void {
    setTimeout(() => {
      this.isPopupShown = true;
    }, 2000);
  }

  // logics for quick shop
  isQuickShopShown: boolean = false;
  quickShopClickItemIndex: number = 0;
  quickShopClickItem: any;
  name: any;
  toggleQuickShopModel(index: number) {
    this.isQuickShopShown = !this.isQuickShopShown;
    this.quickShopClickItemIndex = index;
    this.quickShopClickItem = ProductData.filter((item: any) => {
      if (item.id == this.quickShopClickItemIndex + 1) {
        return item;
      }
    });
  }

  // logics for quick view shop
  isQuickViewShown: boolean = false;
  quickViewClickItemIndex: number = 0;
  quickViewClickItem: any;
  toggleQuickViewModel() {
    this.isQuickViewShown = !this.isQuickViewShown;
  }
  getQuickViewedProduct(index: number) {
    this.quickViewClickItemIndex = index;
    this.quickViewClickItem = ProductData.filter((item: any) => {
      if (item.id == this.quickViewClickItemIndex + 1) {
        return item;
      }
    });
    console.log(this.quickViewClickItem);
    return this.quickViewClickItem[0];
  }

  //logics for popup dialog
  isPopupShown: boolean = false;
  togglePopupModel() {
    this.isPopupShown = !this.isPopupShown;
    document.body.style.overflowY = 'unset';
  }

  //logics for product-details navigation
  navigateToProductDetails(event: Event, product: any) {
    event.stopPropagation();

    this.router.navigate(['/product', product.id]);
  }
}
