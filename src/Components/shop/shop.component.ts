import { Component, Input, OnInit, inject } from '@angular/core';
import ProductData from '../../../src/ProductDatas';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FormsModule } from '@angular/forms';

import { MatSliderModule } from '@angular/material/slider';
import { PopupComponent } from '../popup/popup.component';
import { QuickviewComponent } from '../quickview/quickview.component';
import { QuickshopComponent } from '../quickshop/quickshop.component';
import { ShopService } from '../shopService/shop.service';
gsap.registerPlugin(ScrollTrigger);
@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    FormsModule,
    MatSliderModule,
    PopupComponent,
    QuickviewComponent,
    QuickshopComponent,
  ],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css',
})
export class ShopComponent implements OnInit {
  shopService = inject(ShopService);
  constructor() {
    this.shopService.isQuickShopShown;
    this.shopService.toggleQuickShopModel;

    this.shopService.isQuickViewShown;
    this.shopService.toggleQuickViewModel;
  }
  ngOnInit(): void {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  addNumber() {
    console.log('jld');
  }
  isListed: boolean = true;
  showIn1Column = false;
  showIn2Column = false;
  showIn3Column = false;
  showIn4Column = false;
  showIn5Column = false;
  showIn6Column = false;

  isFilterDisplayed = false;
  isFilterActive = false;
  inStockActive = true;
  inOutOfStockActive = false;
  accessorsCheckBox = false;
  menCheckBox = false;
  womenCheckBox = false;

  // for quick shop model box

  ProductData: any = ProductData;

  showInList() {
    this.isListed = true;

    this.showIn1Column = false;
    this.showIn2Column = false;
    this.showIn3Column = false;
    this.showIn4Column = false;
    this.showIn5Column = false;
    this.showIn6Column = false;
  }
  showInColumn1() {
    this.isListed = false;
    this.showIn1Column = true;
    this.showIn2Column = false;
    this.showIn3Column = false;
    this.showIn4Column = false;
    this.showIn5Column = false;
    this.showIn6Column = false;
  }
  showInColumn2() {
    this.isListed = false;
    this.showIn1Column = false;
    this.showIn2Column = true;
    this.showIn3Column = false;
    this.showIn4Column = false;
    this.showIn5Column = false;
    this.showIn6Column = false;
  }
  showInColumn3() {
    this.isListed = false;
    this.showIn1Column = false;
    this.showIn2Column = false;
    this.showIn3Column = true;
    this.showIn4Column = false;
    this.showIn5Column = false;
    this.showIn6Column = false;
  }
  showInColumn4() {
    this.isListed = false;
    this.showIn1Column = false;
    this.showIn2Column = false;
    this.showIn3Column = false;
    this.showIn4Column = true;
    this.showIn5Column = false;
    this.showIn6Column = false;
  }
  showInColumn5() {
    this.isListed = false;
    this.showIn1Column = false;
    this.showIn2Column = false;
    this.showIn3Column = false;
    this.showIn4Column = false;
    this.showIn5Column = true;
    this.showIn6Column = false;
  }
  showInColumn6() {
    this.isListed = false;
    this.showIn1Column = false;
    this.showIn2Column = false;
    this.showIn3Column = false;
    this.showIn4Column = false;
    this.showIn5Column = false;
    this.showIn6Column = true;
  }
  toggleFilter() {
    this.isFilterDisplayed = !this.isFilterDisplayed;
    if (this.isFilterDisplayed) {
      this.isFilterActive = true;
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }

  closeFilter() {
    this.isFilterActive = false;
    this.isFilterDisplayed = false;
    document.body.style.overflow = 'unset';
  }
  stopEventPropagation(event: Event) {
    event.stopPropagation();
  }

  // for filter
  minPrice: number = 0;
  maxPrice: number = 149;

  animatOnMouseEnter() {
    gsap.to('.close-btn', {
      rotate: 120,
      duration: 0.5,
    });
  }
  animatOnMouseLeave() {
    gsap.to('.close-btn', {
      rotate: -120,
      duration: 0.5,
    });
  }
  // from here i am goint to manage filter funtion
  // ##############################################################?/?
  // for in stuck function
  inStockCount = ProductData.filter((item) => {
    return item.quantity != 0;
  }).length;
  findInStockProduct() {
    this.inOutOfStockActive = false;
    this.inStockActive = !this.inStockActive;
    if (this.inStockActive) {
      this.ProductData = this.ProductData.filter((item: any) => {
        return item.quantity != 0;
      });
      console.log(this.ProductData);
      this.isFilterActive = false;
    } else {
      this.ProductData = this.ProductData;
    }
  }
  //#########################################################################################
  // for out of stuck function
  outOfStockCount = this.ProductData.filter((item: any) => {
    return item.quantity == 0;
  }).length;
  findInOutOfStockActive() {
    this.inStockActive = false;
    this.inOutOfStockActive = !this.inOutOfStockActive;

    if (this.inOutOfStockActive) {
      this.ProductData = this.ProductData.filter((item: any) => {
        return item.quantity == 0;
      });
      console.log(this.ProductData);
      this.isFilterActive = false;
    } else {
      this.ProductData = this.ProductData;
      console.log(this.ProductData);
    }
  }
  //#########################################################################################
  // for filter on the basis of price
  filterByPrice() {
    this.ProductData = this.ProductData.filter((item: any) => {
      let actualPrice = item.price;
      if (item.discountPercent != 0) {
        actualPrice = item.price - (item.discountPercent / 100) * item.price;
      }
      console.log(actualPrice);
      return actualPrice >= this.minPrice && actualPrice <= this.maxPrice;
    });
    console.log(this.ProductData);
    this.isFilterActive = false;
  }
  //#####################################################################
  // for category filter
  // all available category
  //   categories: any = ProductData.map((item: any) => {
  //     if (item.category) {
  //       return item.category.length;
  //     }
  //   });

  //  getAllCategory() {
  //     let categorie: any = ProductData.filter((item: any) => {
  //       if (item.category.length == Math.max(...this.categories)) {
  //         return item.category;
  //       }

  //     });
  //     return categorie[0].category
  //   }

  filterByCategory(
    categoryValid: boolean,
    category: any[],
    ProductData: any[]
  ) {
    categoryValid = !categoryValid;
    if (categoryValid) {
      this.ProductData = category;
    } else {
      this.ProductData = ProductData;
    }
  }
  // by accoreses
  acessories: any = this.ProductData.filter((item: any) => {
    if (item.category) {
      return item.category.includes('acessories');
    }
  });
  accessorCount = this.acessories.length;
  findAcessories() {
    this.menCheckBox = false;
    this.womenCheckBox = false;
    this.filterByCategory(
      this.accessorsCheckBox,
      this.acessories,
      this.ProductData
    );
  }
  // by men
  mens: any = this.ProductData.filter((item: any) => {
    if (item.category) {
      return item.category.includes('men');
    }
  });
  mensCount = this.mens.length;
  findMens() {
    this.accessorsCheckBox = false;
    this.womenCheckBox = false;
    this.filterByCategory(this.menCheckBox, this.mens, this.ProductData);
  }

  // by women
  womens: any = this.ProductData.filter((item: any) => {
    if (item.category) {
      return item.category.includes('women');
    }
  });
  womensCount = this.womens.length;
  findWomens() {
    this.menCheckBox = false;
    this.accessorsCheckBox = false;
    this.filterByCategory(this.womenCheckBox, this.womens, this.ProductData);
  }
}
