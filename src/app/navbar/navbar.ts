import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  scrolled = false;
  sidebarOpen = false;

  constructor(private router: Router) {
    // نتابع تغير الصفحة
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const currentRoute = event.urlAfterRedirects;
        // لو الصفحة مش home خلي الكلاس مفعّل على طول
        if (currentRoute !== '/home' && currentRoute !== '/' && currentRoute !== '') {
          this.scrolled = true;
        } else {
          // لو الصفحة home شغّلي نظام الـ scroll
          this.scrolled = window.scrollY > 100;
        }
      }
    });
  }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentRoute = this.router.url;
    if (currentRoute === '/home' || currentRoute === '/' || currentRoute === '') {
      this.scrolled = window.scrollY > 100;
    }
  }

  toggleSidebar(state: boolean) {
    this.sidebarOpen = state;
  }
}
