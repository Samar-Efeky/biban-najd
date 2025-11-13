import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  scrolled = false;
   sidebarOpen = false;
  // تتابع حدث الـ scroll
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled = window.scrollY > 100; 
  }
   toggleSidebar(state: boolean) {
    this.sidebarOpen = state;
  }
}
