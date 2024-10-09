import { Component, inject } from '@angular/core';
import { ShopService } from '../shopService/shop.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quickshop',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './quickshop.component.html',
  styleUrl: './quickshop.component.css',
})
export class QuickshopComponent {
  shopService = inject(ShopService);
  quickShopClickItem = this.shopService.quickShopClickItem;
  name = this.quickShopClickItem[0].name;
  price = this.quickShopClickItem[0].price;
  discountPercent = this.quickShopClickItem[0].discountPercent;
  quantity = this.quickShopClickItem[0].quantity;
  ordredQuantity = 1;
  sizes = this.quickShopClickItem[0].sizes;
  selectedSize = this.sizes[0];

  increaseOrdredQuantity() {
    if (this.quantity < 1) {
      this.ordredQuantity = 0;
      alert('out of stck');
      return;
    }
    if (this.ordredQuantity < this.quantity) {
      this.ordredQuantity++;
    } else {
      this.ordredQuantity;
      alert('out of stock');
    }
  }
  decreaseOrdredQuantity() {
    if (this.quantity < 1) {
      this.ordredQuantity = 0;
      alert('out of stck');
      return;
    }
    if (this.ordredQuantity > 1) {
      this.ordredQuantity--;
    }
  }
  constructor() {
    this.shopService.toggleQuickShopModel;
  }
  selectSize(size: string) {
    this.selectedSize = size;
  }
}
