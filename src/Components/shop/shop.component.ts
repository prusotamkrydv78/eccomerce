import {   Component } from '@angular/core';
import ProductData from '../../../src/ProductDatas' 
import { CommonModule, CurrencyPipe } from '@angular/common';
import {gsap } from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
@Component({
  selector: 'app-shop', 
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent {
  ProductData:any[] = ProductData
  

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
            // markers:true
      }
    }) 
    this.onMouseEnter()
  }
  onMouseEnter(){
console.log(this.onMouseEnter)
gsap.from(".bi-heart",{
 color:"red",
 duration:1,
 x:-50,
 opacity:0, 
})
  }
  onMouseLeave(){
    gsap.to(".bi-heart",{
      color:"white",
      duration:1,
      x:0,
      opacity:1, 
     })
  }
 
   
  
}
