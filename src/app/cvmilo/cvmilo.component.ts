import { Component } from '@angular/core';

@Component({
  selector: 'app-cvmilo',
  templateUrl: './cvmilo.component.html',
  styleUrls: ['./cvmilo.component.css']
})
export class CvmiloComponent {
  
  scrollToTop() { 

    window.scrollTo({
      top: 0
    });
  }
}
