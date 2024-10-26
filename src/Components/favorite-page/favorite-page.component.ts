import { Component, inject } from '@angular/core';
import { GlobalService } from '../../Services/global/global.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-favorite-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './favorite-page.component.html',
  styleUrl: './favorite-page.component.css',
})
export class FavoritePageComponent {
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
    console.log(this.GlobalService.addToFavProduct);
    let toDeleteProduct = this.GlobalService.addToFavProduct.filter(
      (product: any) => {
        if (product.id == item.id) {
          return product;
        }
      }
    )[0];
    this.GlobalService.addToFavProduct =
      this.GlobalService.addToFavProduct.filter(
        (item: any) => item !== toDeleteProduct
      );

    localStorage.setItem(
      'FavoriteProducts',
      JSON.stringify(this.GlobalService.addToFavProduct)
    );
    this.GlobalService.totalFavItemNumber =
      this.GlobalService.addToFavProduct.length;
  }
  calculateSubtotal() {
    return this.GlobalService.addToFavProduct.reduce(
      (acc: number, item: any) => acc + item.price * item.quantity,
      0
    );
  }
}
