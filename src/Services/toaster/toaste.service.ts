import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ToasteService {
  constructor() {}
  showAddToCartToast = false;
  addToCartToastMassage = 'Product Added';
  toggleAddToCartToast() {
    this.showAddToCartToast = true;
    setTimeout(() => {
      this.showAddToCartToast = false;
    
    }, 3000);
  }
}
