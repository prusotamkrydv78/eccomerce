import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import ProductData from '../../ProductDatas'; 
import { ShopService } from '../shopService/shop.service';
@Component({
  selector: 'app-best-seller',
  standalone: true,
  imports: [CurrencyPipe,CommonModule],
  templateUrl: './best-seller.component.html',
  styleUrl: './best-seller.component.css'
})
export class BestSellerComponent {
ProductData:any[]= ProductData

shopService = inject(ShopService); 
}
