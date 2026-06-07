import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar';
import { FooterComponent } from './components/footer/footer';
import { WhatsappBtnComponent } from './components/whatsapp-btn/whatsapp-btn';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent, WhatsappBtnComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('golorevamp');
}
