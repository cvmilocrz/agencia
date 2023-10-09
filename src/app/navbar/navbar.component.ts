import { Component } from '@angular/core';
import { NgModule } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  scrollToTop() { 

    window.scrollTo({
      top: 0
    });
  }

  isNavBtnHovered = false;

  toggleNavBtnHover() {
    this.isNavBtnHovered = !this.isNavBtnHovered;
  }
  
}
