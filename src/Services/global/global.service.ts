import { ToasteService } from '../toaster/toaste.service';
import { ShopService } from './../../Components/shopService/shop.service';
import { inject, Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GlobalService implements OnInit {
  shopService = inject(ShopService);
  toastService = inject(ToasteService);
  isCartPopUp = false;
  isFavPopUp = false;
  addToCartProduct: any;

  cartProduct: any = [];
  cartItems: any;
  allCartProduct: any = [];
  totalCartItemNumber: number;

  addToFavProduct: any;
  favProduct: any = [];
  favItems: any;
  allFavProduct: any = [];
  totalFavItemNumber: number;

  constructor() {
    this.addToCartProduct = [];
    this.cartProduct = localStorage.getItem('addToCartProducts');
    this.cartItems = JSON.parse(this.cartProduct);
    this.totalCartItemNumber = this.cartItems ? this.cartItems.length : 0;

    this.allCartProduct = JSON.parse(this.cartProduct) || [];
    this.addToCartProduct = [...this.allCartProduct];
    this.totalCartItemNumber = this.addToCartProduct.length;

    this.addToFavProduct = [];

    this.favProduct = localStorage.getItem('FavoriteProducts');

    this.totalCartItemNumber = this.favItems ? this.favItems.length : 0;

    this.favItems = JSON.parse(this.favProduct);

    this.allFavProduct = JSON.parse(this.favProduct) || [];
    this.addToFavProduct = [...this.allFavProduct];
    this.totalFavItemNumber = this.addToFavProduct.length;
  }
  ngOnInit(): void {}

  addToCart(product: any) {
    try {
      this.shopService.isQuickShopShown = false;
      this.isCartPopUp = true;
      document.body.style.overflowY = 'hidden';
      if (this.checkDuplicateCartProduct(product).length != 0) {
        this.toastService.addToCartToastMassage = 'Product is already added';
        console.log(product);
        this.toastService.toggleAddToCartToast();
        return;
      }

      this.toastService.addToCartToastMassage = 'Product is added';

      this.cartProduct = localStorage.getItem('addToCartProducts');
      this.cartItems = JSON.parse(this.cartProduct);
      this.addToCartProduct.push(product);
      localStorage.setItem(
        'addToCartProducts',
        JSON.stringify(this.addToCartProduct)
      );
      this.totalCartItemNumber = this.addToCartProduct.length || 0;
      this.toastService.toggleAddToCartToast();
    } catch (error) {
      console.log('failed to add product', error);
    }
  }
  toggleCartPopUP() {
    this.isCartPopUp = !this.isCartPopUp;
    if (this.isCartPopUp) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflowY = 'unset';
    }
  }
  addToFav(product: any) {
    try {
      this.shopService.isQuickShopShown = false;
      this.shopService.isQuickViewShown = false;
      this.isFavPopUp = true;
      document.body.style.overflowY = 'hidden';
      if (this.checkDuplicateFavProduct(product).length != 0) {
        this.toastService.addToCartToastMassage =
          'Product is already added to Fav';
        console.log(product);
        this.toastService.toggleAddToCartToast();
        return;
      }
      this.toastService.addToCartToastMassage = 'Product is added to Favorite';
      this.favProduct = localStorage.getItem('FavoriteProducts');
      this.addToFavProduct.push(product);
      this.favItems = JSON.parse(this.favProduct);
      localStorage.setItem(
        'FavoriteProducts',
        JSON.stringify(this.addToFavProduct)
      );

      this.totalFavItemNumber = this.totalFavItemNumber || 0;
      this.toastService.toggleAddToCartToast();
    } catch (error) {
      console.log('error at adding to fav', error);
    }
  }
  toggleFavPopUP() {
    this.isFavPopUp = !this.isFavPopUp;
    if (this.isFavPopUp) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflowY = 'unset';
    }
  }
  checkDuplicateCartProduct(item: any) {
    if (this.addToCartProduct.length != 0) {
      return this.addToCartProduct.filter(
        (product: any) => product.id == item.id
      );
    }
    return [];
  }
  checkDuplicateFavProduct(item: any) {
    if (this.addToFavProduct.length != 0) {
      return this.addToFavProduct.filter(
        (product: any) => product.id == item.id
      );
    }
    return [];
  }
}
