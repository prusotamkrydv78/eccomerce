import { Component } from '@angular/core';
import ProductData from '../../../src/ProductDatas'
import { CommonModule, CurrencyPipe } from '@angular/common';
import { gsap } from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FormsModule } from '@angular/forms';
gsap.registerPlugin(ScrollTrigger);
@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [CommonModule, FormsModule],
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

}
