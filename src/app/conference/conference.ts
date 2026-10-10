import { Component, signal } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-conference',
  imports: [DatePipe, FormsModule],
  templateUrl: './conference.html',
  styleUrl: './conference.css',
})
export class Conference {
  titre = signal('Angular 21 en pratique');
  intervenant = signal('Dr. Ahmed Ben Salah');
  dateEvenement = signal(new Date(2026, 11, 15));
  placesDisponibles = signal(3);

  sInscrire() {
    this.placesDisponibles.update(v => v - 1);
  }
}