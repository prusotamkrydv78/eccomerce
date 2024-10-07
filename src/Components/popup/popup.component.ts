import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-popup',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.css',
})
export class ExitPopupComponent {
  products = [
    {
      name: 'Amara Reversible Jacket',
      price: '¥7,100',
      image: 'path-to-image',
    },
    {
      name: 'Anti Slip Exercise Yoga Mat',
      price: '¥1,900 - ¥2,900',
      image: 'path-to-image',
    },
    {
      name: 'Beach Babe - Malibu Bikini',
      price: '¥5,800',
      image: 'path-to-image',
    },
  ];

  copyCode() {
    navigator.clipboard.writeText('CODE15OFF');
    alert('Code copied!');
  }

  grabDiscount() {
    alert('Discount applied!');
  }

  closePopup() {
    // logic to close popup
  }
}
