import { Component } from '@angular/core';
import { HeroSection } from '../hero-section/hero-section';
import { OurServices } from "../our-services/our-services";

@Component({
  selector: 'app-home-page',
  imports: [HeroSection, OurServices],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage {

}
