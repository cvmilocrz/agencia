import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

  constructor(private el: ElementRef) {}

  Scrollini(){
    const seccion = this.el.nativeElement.querySelector('#scrollto');

    if (seccion) {
      seccion.scrollIntoView({ behavior: 'smooth' });
    }

  }

  scrollToTop() { 

    window.scrollTo({
      top: 0
    });
  }

}