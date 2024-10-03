import { Component,HostListener } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const button = document.getElementById('back-to-top');
    if(button!=null){

      if (window.scrollY > 300 ) {  // Show the button after scrolling down 300px
        button.style.display = 'block';

      } else {
        button.style.display = 'none';
      }
    }
  }

  // Function to scroll smoothly to the top
  scrollToTop() {
    window.scroll({
      top: 0,
      behavior: 'smooth', 
    });
  }
}
