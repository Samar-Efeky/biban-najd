import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomePage } from "./home-page/home-page";


@Component({
  selector: 'app-root',
  imports: [ HomePage],
  templateUrl: './app.html',  
  styleUrls: ['./app.scss']  
})
export class App {

}
