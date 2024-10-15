import { Component, HostListener, inject } from '@angular/core';
import { ShopService } from '../shopService/shop.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import ProductData from '../../ProductDatas';

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css',
})
export class ProductPageComponent {
  shopService = inject(ShopService);
  isQuickViewShown = this.shopService.isQuickViewShown;
  toggleQuickViewModel = this.shopService.toggleQuickViewModel;
  quickViewClickItem = ProductData[0];

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
    console.log(this.colors);
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
    console.log(this.selectedProduct);
  }
  x_coordinate = 0;
  y_coordinate = 0;
  transformStyle: string = '';
  onMouseMove(event: MouseEvent) {
    const div = event.target as HTMLElement;
    const rect = div.getBoundingClientRect();
    this.x_coordinate = event.clientX - rect.left;
    this.y_coordinate = event.clientY - rect.top;
    if (this.x_coordinate < 80) {
      this.x_coordinate = this.x_coordinate+20;
    }
    if (this.y_coordinate < 80) {
      this.y_coordinate = 80;
    }
    if (this.x_coordinate>180) {
      this.x_coordinate=180
    }
    if (this.y_coordinate>240) {
      this.y_coordinate=240
    }
    this.transformStyle=`scale(2) translate(${-(this.x_coordinate-100)}px,${-(this.y_coordinate-160)}px)`
    console.log(`Mouse X: ${this.x_coordinate}, Mouse Y: ${this.y_coordinate}`);
  }
}
