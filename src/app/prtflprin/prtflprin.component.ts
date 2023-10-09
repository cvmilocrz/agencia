import { Component } from '@angular/core';

@Component({
  selector: 'app-prtflprin',
  templateUrl: './prtflprin.component.html',
  styleUrls: ['./prtflprin.component.css']
})
export class PrtflprinComponent {
  
  scrollToTop() { 

    window.scrollTo({
      top: 0
    });
  }

}
