import { Injectable } from '@angular/core';
import ProductData from '../../ProductDatas';

@Injectable({
  providedIn: 'root',
})
export class ShopService {
  constructor() {}

  isQuickShopShown: boolean = false;
  quickShopClickItemIndex: number = 0;
  quickShopClickItem: any;
  name:any
  toggleQuickShopModel(index: number) {
    this.isQuickShopShown = !this.isQuickShopShown;
    this.quickShopClickItemIndex = index;

     (this.quickShopClickItem = ProductData.filter((item: any) => {
      if (item.id == this.quickShopClickItemIndex + 1) {
        console.log(item);
        return item;
      }
    }));
  
  }

}
