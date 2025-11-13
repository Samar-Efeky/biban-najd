import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomePage } from "./home-page/home-page";
import { Navbar } from "./navbar/navbar";


@Component({
  selector: 'app-root',
  imports: [ Navbar, RouterOutlet],
  templateUrl: './app.html',  
  styleUrls: ['./app.scss']  
})
export class App {

}
