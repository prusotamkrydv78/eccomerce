import { Injectable } from '@angular/core';
import ProductData from '../../ProductDatas';

@Injectable({
  providedIn: 'root',
})
export class ShopService {
  constructor() {}
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
    
  this.getQuickViewedProduct(4)
  }
  getQuickViewedProduct(index:number){
    
  this.quickViewClickItemIndex = index;
    this.quickViewClickItem = ProductData.filter((item: any) => {
      if (item.id == this.quickViewClickItemIndex + 1) {
        console.log(item);
        return item;
      }
    });
  }
}
