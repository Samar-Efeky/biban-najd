import { isPlatformBrowser } from '@angular/common';
import { Component, HostListener, inject, OnDestroy, PLATFORM_ID, signal,inject as injectPlatform } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { Router, NavigationEnd } from '@angular/router';
import { filter, Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  scrolled = signal(false);
  sidebarOpen = signal(false);

  private router = inject(Router);
  private platformId = injectPlatform(PLATFORM_ID);

  constructor() {

    if (isPlatformBrowser(this.platformId)) {
      this.router.events
        .pipe(
          filter(event => event instanceof NavigationEnd),
          takeUntilDestroyed()
        )
        .subscribe((event: any) => {
          const currentRoute = event.urlAfterRedirects;

          if (currentRoute !== '/home' && currentRoute !== '/' && currentRoute !== '') {
            this.scrolled.set(true);
          } else {
            this.scrolled.set(window.scrollY > 100);
          }
        });
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    
    if (!isPlatformBrowser(this.platformId)) return;

    const currentRoute = this.router.url;
    if (currentRoute === '/home' || currentRoute === '/' || currentRoute === '') {
      this.scrolled.set(window.scrollY > 100);
    }
  }

  toggleSidebar(state: boolean) {
    this.sidebarOpen.set(state);
  }
}