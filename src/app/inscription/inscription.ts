import { Component, inject } from '@angular/core';
import { BookingService } from '../services/booking-service';

@Component({
  selector: 'app-inscription',
  imports: [],
  templateUrl: './inscription.html',
  styleUrl: './inscription.css',
})
export class Inscription {
  readonly bookingService = inject(BookingService);
}