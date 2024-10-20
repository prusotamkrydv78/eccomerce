import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import ProductData from '../../ProductDatas'; 
import { ShopService } from '../shopService/shop.service';
import { QuickshopComponent } from '../quickshop/quickshop.component';
import { QuickviewComponent } from '../quickview/quickview.component';
@Component({
  selector: 'app-best-seller',
  standalone: true,
  imports: [CurrencyPipe,CommonModule,QuickshopComponent,QuickviewComponent],
  templateUrl: './best-seller.component.html',
  styleUrl: './best-seller.component.css'
})
export class BestSellerComponent {
ProductData:any[]= ProductData

shopService = inject(ShopService); 
click(){
  console.log("hi")
}
}
