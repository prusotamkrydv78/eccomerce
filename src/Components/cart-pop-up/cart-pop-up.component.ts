import { GlobalService } from './../../Services/global/global.service';
import { animate } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-cart-pop-up',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart-pop-up.component.html',
  styleUrl: './cart-pop-up.component.css',
})
export class CartPopUpComponent {
  GlobalService = inject(GlobalService);
  decreaseQuantity(item: any) {
    if (item.quantity != 1 && item.quantity != 0) {
      item.quantity--;
    }
  }
  increaseQuantity(item: any) {
    item.quantity++;
  }
  removeItem(item: any) {
    console.log(item.id);
    console.log(this.GlobalService.addToCartProduct);
    let toDeleteProduct = this.GlobalService.addToCartProduct.filter(
      (product: any) => {
        if (product.id == item.id) {
          return product;
        }
      }
    )[0];
    this.GlobalService.addToCartProduct =
      this.GlobalService.addToCartProduct.filter(
        (item: any) => item !== toDeleteProduct
      );

    localStorage.setItem(
      'addToCartProducts',
      JSON.stringify(this.GlobalService.addToCartProduct)
    );
    this.GlobalService.totalCartItemNumber =
      this.GlobalService.addToCartProduct.length;
  }
  calculateSubtotal() {
    return this.GlobalService.addToCartProduct.reduce(
      (acc: number, item: any) => acc + item.price * item.quantity,
      0
    );
  }
}
