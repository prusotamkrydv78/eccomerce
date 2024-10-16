import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import RecommendedProducts from '../../Recommended';
import { ShopService } from '../shopService/shop.service';

@Component({
  selector: 'app-popup',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.css',
})
export class PopupComponent {
  RecommendedProduct = RecommendedProducts;
  showPopup = false;
  shopService = inject(ShopService);

  copyCode() {
    navigator.clipboard.writeText('CODE15OFF');
  }

  grabDiscount() {
    alert('Discount applied!');
  }
}
