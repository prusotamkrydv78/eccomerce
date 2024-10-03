import { CommonModule } from '@angular/common';
import { Component, AfterViewInit, ElementRef, Renderer2 } from '@angular/core';

import { gsap } from 'gsap';

@Component({
  selector: 'app-carousel',
  styleUrls: ['./crausel.component.css'],
  templateUrl: './crausel.component.html',
  standalone: true,
  imports: [CommonModule],
})
export class CarouselComponent implements AfterViewInit {
  time: number = 4000;

  constructor(private elRef: ElementRef) {}

  ngAfterViewInit(): void { 
    this.nextSlide();
  }

  nextSlide() {
    this.fristSlide();
    setTimeout(() => {
      this.secondSlide();
      setTimeout(() => {
        this.thirdSlide();
      }, this.time);
    }, this.time);
  }
  fristSlide() {
    var carousel = this.elRef.nativeElement.querySelector('#carousel');
    carousel.style.transform = 'translate(0vw)';
    console.log('first slide');

    let tl = gsap.timeline()
    tl.from(".backgroundImg",{
      opacity: 0,
      duration: 1,
       
    })
  gsap.from('.fristSlide', {
      opacity: 0,
      duration: 2,
      top: '18rem',
      stagger: 0.1,
    });
  }

  secondSlide() {
    var carousel = this.elRef.nativeElement.querySelector('#carousel');
    carousel.style.transform = 'translate(-100vw)';
    console.log('sec slide');
    
    let tl = gsap.timeline()
    tl.from(".backgroundImg",{
      opacity: 0,
      duration: 1,
       
    })
   gsap.from('.secondSlide', {
      opacity: 0,
      duration: 2,
      top: '18rem',
      stagger: 0.1,
    });
  }
  thirdSlide() {
    var carousel = this.elRef.nativeElement.querySelector('#carousel');
    carousel.style.transform = 'translate(-200vw)';

    console.log('thu slide');
    let tl = gsap.timeline()
    tl.from(".backgroundImg",{
      opacity: 0,
      duration: 1,
       
    })
    gsap.from('.thirdSlide', {
      opacity: 0,
      duration: 2,
      top: '18rem',
      stagger: 0.1,
    });
    
    setTimeout(() => {this.nextSlide()
    }, this.time);
  }
}
