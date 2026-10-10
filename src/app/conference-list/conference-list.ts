import { Component, inject, signal } from '@angular/core';
import { DatePipe, UpperCasePipe } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { ConferenceDetail } from '../conference-detail/conference-detail';
import { ConferenceService } from '../services/conference-service';
import { BookingService } from '../services/booking-service';

@Component({
  selector: 'app-conference-list',
  imports: [DatePipe, UpperCasePipe, ConferenceDetail, RouterLink],
  templateUrl: './conference-list.html',
  styleUrl: './conference-list.css',
})
export class ConferenceList {
  readonly conferenceService = inject(ConferenceService);
  readonly bookingService = inject(BookingService);
  private router = inject(Router);

  readonly today = new Date();

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

  confirmer(id: number) {
    this.router.navigate(['/confirmation', id], { queryParams: { statut: 'reussie' } });
  }
}