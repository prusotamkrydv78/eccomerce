import { ShopService } from './../../Components/shopService/shop.service';
import { inject, Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GlobalService implements OnInit {
  shopService = inject(ShopService);
  isCartPopUp = false;
  addToCartProduct: any;
  cartProduct: any = [];
  cartItems: any;
  allCartProduct: any = [];
  totalCartItemNumber: number;
  constructor() {
    this.addToCartProduct = [];
    this.cartProduct = localStorage.getItem('addToCartProducts');
    this.cartItems = JSON.parse(this.cartProduct);
    this.totalCartItemNumber = this.cartItems ? this.cartItems.length : 0;

    this.allCartProduct = JSON.parse(this.cartProduct) || [];
    this.addToCartProduct = [...this.allCartProduct];
    this.totalCartItemNumber = this.addToCartProduct.length;
  }
  ngOnInit(): void {}

  addToCart(product: any) {
    try {
      this.shopService.isQuickShopShown = false;
      if (this.checkDuplicateProduct(product).length != 0) {
        alert('product is already added to cart');
        return;
      }

      this.cartProduct = localStorage.getItem('addToCartProducts');
      this.cartItems = JSON.parse(this.cartProduct);
      this.addToCartProduct.push(product);
      localStorage.setItem(
        'addToCartProducts',
        JSON.stringify(this.addToCartProduct)
      );
      this.totalCartItemNumber = this.addToCartProduct.length || 0;
    } catch (error) {
      console.log('failed to add product', error);
    }
  }
  toggleCartPopUP() {
    this.isCartPopUp = !this.isCartPopUp;
    if (this.isCartPopUp) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }
  checkDuplicateProduct(item: any) {
    if (this.addToCartProduct.length != 0) {
      return this.addToCartProduct.filter(
        (product: any) => product.id == item.id
      );
    }
    return [];
  }
}
