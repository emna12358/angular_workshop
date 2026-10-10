import { Component, signal } from '@angular/core';
import { Header } from './header/header';
import { Menu } from './menu/menu';
import { Profil } from './profil/profil';
import { Amis } from './amis/amis';
import { Notifications } from './notifications/notifications';
import { Footer } from './footer/footer';
import { Conference } from './conference/conference';

@Component({
  selector: 'app-root',
  imports: [Header, Menu, Profil, Amis, Notifications, Footer, Conference],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('mon-projet');
}
