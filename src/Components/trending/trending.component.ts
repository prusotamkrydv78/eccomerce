import { GlobalService } from './../../Services/global/global.service';
 
import {  AfterViewInit, Component, inject } from '@angular/core';
import ProductData from '../../../src/ProductDatas'
import { FormsModule } from '@angular/forms';
import { CommonModule, CurrencyPipe } from '@angular/common';
import {gsap } from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ShopService } from '../shopService/shop.service';
gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-trending',
  standalone: true,
  imports: [FormsModule,CommonModule,CurrencyPipe],
  templateUrl: './trending.component.html',
  styleUrl: './trending.component.css'
})
export class TrendingComponent implements AfterViewInit  {
  ProductData:any[] = ProductData
  shopService = inject(ShopService)


  GlobalService = inject(GlobalService);
  ngAfterViewInit(){
    gsap.to("#productCard",{
      opacity:1,
      duration:3,   
      y:'-5rem', 
      
      stagger:.001,
      scrollTrigger:{
        trigger:"#productCard", 
        start: 'top 80%',     
         end: 'top 100%', 
         toggleActions: 'play none none reverse',  
            scrub: 1, 
      }
    })  
  }
   
 
   
  
 

} 
