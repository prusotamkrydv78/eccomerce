import { Injectable, OnInit, inject } from '@angular/core';
import ProductData from '../../ProductDatas';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ShopService implements OnInit {
  router = inject(Router);
  constructor() {}
  ngOnInit(): void {
    console.log(this.isPopupShown);
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
        console.log(item);
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
    return this.quickViewClickItem[0];
  }

  //logics for popup dialog
  isPopupShown: boolean = false;
  togglePopupModel() {
    this.isPopupShown = !this.isPopupShown;
    document.body.style.overflow = 'unset';
  }

  //logics for product-details navigation
  navigateToProductDetails(product: any) {
    console.log(product.id);
    this.router.navigate(['/product', product.id]);
  }
}
