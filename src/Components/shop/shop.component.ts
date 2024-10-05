import { Component } from '@angular/core';
import ProductData from '../../../src/ProductDatas'
import { CommonModule, CurrencyPipe } from '@angular/common';
import { gsap } from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FormsModule } from '@angular/forms';
import { FilterComponent } from './filter/filter.component';

import { MatSliderModule } from '@angular/material/slider';
gsap.registerPlugin(ScrollTrigger);
@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [CommonModule, FormsModule, FilterComponent, FormsModule, MatSliderModule],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent {
  isListed: boolean = true
  showIn2Column = false
  showIn3Column = false
  showIn4Column = false
  showIn5Column = false
  showIn6Column = false
  isFilterDisplayed = false
  isFilterActive = false


  ProductData: any = ProductData;

  showInList() {
    this.isListed = true
    this.showIn2Column = false
    this.showIn3Column = false
    this.showIn4Column = false
    this.showIn5Column = false
    this.showIn6Column = false

  }
  showInColumn2() {
    this.isListed = false
    this.showIn2Column = true
    this.showIn3Column = false
    this.showIn4Column = false
    this.showIn5Column = false
    this.showIn6Column = false
  }
  showInColumn3() {
    this.isListed = false
    this.showIn2Column = false
    this.showIn3Column = true
    this.showIn4Column = false
    this.showIn5Column = false
    this.showIn6Column = false

  }
  showInColumn4() {
    this.isListed = false
    this.showIn2Column = false
    this.showIn3Column = false
    this.showIn4Column = true
    this.showIn5Column = false
    this.showIn6Column = false
  }
  showInColumn5() {
    this.isListed = false
    this.showIn2Column = false
    this.showIn3Column = false
    this.showIn4Column = false
    this.showIn5Column = true
    this.showIn6Column = false
  }
  showInColumn6() {
    this.isListed = false
    this.showIn2Column = false
    this.showIn3Column = false
    this.showIn4Column = false
    this.showIn5Column = false
    this.showIn6Column = true
  }
  toggleFilter() {
    this.isFilterDisplayed = !this.isFilterDisplayed
    if (this.isFilterDisplayed) {

      this.isFilterActive = true
      document.body.style.overflow = "hidden"

    } else {
      document.body.style.overflow = "unset"
    }

  }

  closeFilter() {
    this.isFilterActive = false
    this.isFilterDisplayed = false
    document.body.style.overflow = "unset"


  }
  stopEventPropagation(event: Event) {
    event.stopPropagation();
  }

  // for filter
  minPrice: number = 0;
  maxPrice: number = 149;

  constructor() {

  }

  applyFilters() {
    // Handle filter logic here
    console.log('Filters applied');
  }

  animatOnMouseEnter() {
    gsap.to(".close-btn", {
      rotate: 120,
      duration: .5
    })

  }
  animatOnMouseLeave() {
    gsap.to(".close-btn", {
      rotate: -120,
      duration: .5
    })

  }
}
