import { Component } from '@angular/core';

@Component({
  selector: 'app-contrapido',
  templateUrl: './contrapido.component.html',
  styleUrls: ['./contrapido.component.css']
})
export class ContrapidoComponent {

  scrollToTop() { 

    window.scrollTo({
      top: 0
    });
  }
}
