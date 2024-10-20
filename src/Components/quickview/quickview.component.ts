import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ShopService } from '../shopService/shop.service';

@Component({
  selector: 'app-quickview',
  templateUrl: './quickview.component.html',
  styleUrls: ['./quickview.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule]
})
export class QuickviewComponent {
  shopService = inject(ShopService)
  isQuickViewShown = this.shopService.isQuickViewShown;
  toggleQuickViewModel = this.shopService.toggleQuickViewModel
  quickViewClickItem = this.shopService.quickViewClickItem[0];






  name = this.quickViewClickItem.name;
  price = this.quickViewClickItem.price;
  discountPercent = this.quickViewClickItem.discountPercent;
  quantity = this.quickViewClickItem.quantity;
  imageUrl = this.quickViewClickItem.img;
  ordredQuantity = 1;
  sizes = this.quickViewClickItem.sizes;
  colors = this.quickViewClickItem.colors;
  selectedSize = this.sizes[0];
  selectedColor = this.colors[0];
  constructor() { 
    this.shopService.toggleQuickShopModel;
    if (this.quantity < 1) {
      this.ordredQuantity = 0;
    }
  }
  increaseOrdredQuantity() {
    if (this.quantity < 1) {
      this.ordredQuantity = 0;
      alert('out of stck');
      return;
    }
    if (this.ordredQuantity < this.quantity) {
      this.ordredQuantity++;
    } else {
      alert('you reached at maximun');
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
  selectSize(size: string) {
    this.selectedSize = size;
  }
  selectColor(color: string) {
    this.selectedColor = color;
  }


  
 
  selectedProduct: any = {
    name: String,
    bugingPrice: Number,
    discountPercent: Number,
    ordredQuantity: Number,
    selectedSize: String,
  };
  addToCart() {
    this.selectedProduct = {
      name: this.name,
      buyingPrice: this.price - (this.discountPercent / 100) * this.price,
      discountPercent: this.discountPercent,
      ordredQuantity: this.ordredQuantity,
      selectedSize: this.selectedSize || '',
    };
    this.shopService.isQuickShopShown = false;
    // this.shopService.addToCart(this.selectedProduct)
 
  }
}
