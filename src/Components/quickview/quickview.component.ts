import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-page',
  templateUrl: './quickview.component.html',
  styleUrls: ['./quickview.component.css'],
  standalone:true,
  imports:[FormsModule,CommonModule]
})
export class QuickviewComponent {
  product = {
    name: 'Analogue Resin Strap',
    price: 4600,
    description: `Go kalles this summer with this vintage navy and white striped v-neck t-shirt from the Nike. Perfect for pairing with denim and white kicks for a stylish kalles vibe.`,
    images: [
      'assets/img1.jpg',
      'assets/img2.jpg',
      'assets/img3.jpg'
    ]
  };

  sizes = ['XS', 'S', 'M', 'L', 'XL'];
  selectedSize = 'XS';
  selectedImage = this.product.images[0];

  relatedProducts = [
    { name: 'Blush Beanie', price: 2300, image: 'assets/blush-beanie.jpg' },
    { name: 'Cream Women Pants', price: 5300, image: 'assets/cream-pants.jpg' },
    { name: 'Crop Top T-shirt', price: 2300, image: 'assets/crop-top.jpg' }
  ];

  onSelectImage(image: string) {
    this.selectedImage = image;
  }

  onSelectSize(size: string) {
    this.selectedSize = size;
  }
}
