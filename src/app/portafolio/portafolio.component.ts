import { Component, ElementRef} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent {

  constructor(private el: ElementRef, private router: Router) {}



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

  proyectos = [
    { nombre: 'Login Simple', tecnologias: 'HTML, CSS & JS', cssClass: 'work', url: 'https://login-cvmilo.netlify.app' },
    { nombre: 'Tres en raya', tecnologias: 'HTML, CSS & JS', cssClass: 'work1', url: 'https://tres-en-raya-cvmilo.netlify.app' },
    { nombre: 'Tienda Simple', tecnologias: 'Angular', cssClass: 'work2', url: 'https://tienda-cvmilo.netlify.app' },
    { nombre: 'Mi portafolio', tecnologias: 'HTML, CSS & JS', cssClass: 'work3', url: 'https://cvmilo.netlify.app' },
    { nombre: 'Animaciones AF', tecnologias: 'After Effects', cssClass: 'work4', url: "/animaciones" }
    // Agrega más proyectos aquí
  ];

  navegarAComponente(url: string) {
    if (url.startsWith('/')) {
      this.router.navigateByUrl(url);
    } else {
      window.open(url, '_blank'); // Abre en una nueva ventana/tab si es una URL externa.
    }
  }

  page = 1;
  itemsPerPage = 4; // Cambia este número según tus necesidades
}
