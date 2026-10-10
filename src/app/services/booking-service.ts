import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  nbReservations = signal(0);

  reserver() {
    this.nbReservations.update(v => v + 1);
  }
}