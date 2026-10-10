import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Navbar } from './navbar/navbar';
import { Menu } from './menu/menu';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Navbar, Menu, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}