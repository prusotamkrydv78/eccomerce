import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import ProductData from '../../ProductDatas'; 
@Component({
  selector: 'app-best-seller',
  standalone: true,
  imports: [CurrencyPipe,CommonModule],
  templateUrl: './best-seller.component.html',
  styleUrl: './best-seller.component.css'
})
export class BestSellerComponent {
ProductData:any[]= ProductData
}
