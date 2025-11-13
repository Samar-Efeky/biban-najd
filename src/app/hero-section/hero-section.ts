import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-hero-section',
  imports: [RouterLink],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.scss',
})
export class HeroSection {
   services = [
    {
      icon: 'ri-tools-line',
      title: 'عنوان الخدمة',
      description: 'وصف الخدمة'
    },
    {
      icon: 'ri-brush-line',
      title: 'عنوان الخدمة',
      description: 'وصف الخدمة'
    },
    {
      icon: 'ri-home-gear-line',
       title: 'عنوان الخدمة',
      description: 'وصف الخدمة'
    }
  ];
}
