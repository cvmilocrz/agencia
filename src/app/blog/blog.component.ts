import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  scrollToTop() { 

    window.scrollTo({
      top: 0
    });
  }
}
