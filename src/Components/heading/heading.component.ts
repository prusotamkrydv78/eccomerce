import { AfterViewInit, Component } from '@angular/core';
import { RouterLink } from '@angular/router'; 
import { gsap } from 'gsap';
@Component({
  selector: 'app-heading',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './heading.component.html',
  styleUrl: './heading.component.css',
 
})

export class HeadingComponent implements AfterViewInit{

  ngAfterViewInit() {
    this.createTimeline();
  }
  public createTimeline() {
    const tl = gsap.timeline();
    tl.to(".animateLogo",{
      opacity:1,
      left:"0rem",
      duration:1,
      smoothOrigin:true
    })
    gsap.to(".animateIcon",{
      opacity:1,
      right:"0rem",
      duration:1,
      smoothOrigin:true
    })
    tl.to("#navItem",{
      opacity:1,
      top:"0rem",
      duration:1,
      stagger:0.1, 
    })
  }
}
