import { Component, signal } from '@angular/core';
import { DatePipe, UpperCasePipe } from '@angular/common';
import { ConferenceDetail } from '../conference-detail/conference-detail';

@Component({
  selector: 'app-conference-list',
  imports: [DatePipe, UpperCasePipe, ConferenceDetail],
  templateUrl: './conference-list.html',
  styleUrl: './conference-list.css',
})
export class ConferenceList {
  readonly today = new Date();

  conferences = signal([
    {
      id: 1,
      title: 'Angular 21 en pratique',
      description: 'Découvrir les nouveautés d\'Angular 21',
      date: new Date(2026, 11, 20),
      place: 'Tunis',
      maxParticipants: 100,
      nbParticipants: signal(50),
    },
    {
      id: 2,
      title: 'TypeScript avancé',
      description: 'Maîtriser les types et les classes',
      date: new Date(2026, 11, 28),
      place: 'Sousse',
      maxParticipants: 30,
      nbParticipants: signal(25),
    },
    {
      id: 3,
      title: 'Design des interfaces',
      description: 'Concevoir des interfaces claires',
      date: new Date(2027, 0, 15),
      place: 'Sfax',
      maxParticipants: 20,
      nbParticipants: signal(20),
    },
    {
      id: 4,
      title: 'Ancienne conférence',
      description: 'Cette conférence est déjà passée',
      date: new Date(2026, 2, 10),
      place: 'Tunis',
      maxParticipants: 50,
      nbParticipants: signal(40),
    },
  ]);

  titreChoisi = signal('');
  descriptionChoisie = signal('');
  dateChoisie = signal(new Date());
  lieuChoisi = signal('');

  choisir(titre: string, description: string, date: Date, lieu: string) {
    this.titreChoisi.set(titre);
    this.descriptionChoisie.set(description);
    this.dateChoisie.set(date);
    this.lieuChoisi.set(lieu);
  }
}