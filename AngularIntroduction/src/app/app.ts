import { Component, signal } from '@angular/core';
import { Home } from './components/home/home';
import { RouterOutlet } from '@angular/router';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';


@Component({
  selector: 'app-root',
  imports: [Header, Footer, Home, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('AngularIntroduction');
}
