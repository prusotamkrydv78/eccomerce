import { AfterViewInit, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeadingComponent } from '../Components/heading/heading.component';
import { gsap } from 'gsap';
import { FooterComponent } from '../Components/footer/footer.component';
import { ProductPageComponent } from '../Components/product-page/product-page.component';
import { PopupComponent } from "../Components/popup/popup.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeadingComponent, FooterComponent, ProductPageComponent, PopupComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {
  title = 'kalles';
ngAfterViewInit(): void {
  this.createTimeLine()
}
tl:any
public createTimeLine(): void {
  this.tl = gsap.timeline()
}

}
