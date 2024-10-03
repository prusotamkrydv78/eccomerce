import { AfterViewInit, Component } from '@angular/core';
import { CarouselComponent } from './crausel/crausel.component';
import { TrendingComponent } from '../trending/trending.component';
import { gsap } from 'gsap';

import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BestSellerComponent } from '../best-seller/best-seller.component';
gsap.registerPlugin(ScrollTrigger);
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselComponent, TrendingComponent, BestSellerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements AfterViewInit {
  ngAfterViewInit() {
    gsap.to('#card', {
      opacity: 1,
      duration: 1,
      y: '-5rem',
      repeat: 0,
      stagger: 0.2,
      scrollTrigger: {
        trigger: '#card',
        start: 'top 80%',
        end: 'top 40%',
        toggleActions: 'play none none reverse',
        scrub: 1,
        markers: true,
      },
    });
    gsap.to('.news', {
      opacity: 1,
      duration: 1,
      top: '0',
      repeat: 0,
      stagger: 0.2,
      scrollTrigger: {
        trigger: '.news',
        start: 'top 80%',
        end: 'top 40%',
        toggleActions: 'play none none reverse',
        scrub: 1,
        markers: true,
      },
    });
  }
}
