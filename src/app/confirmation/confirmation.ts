import { Component, computed, inject } from '@angular/core';
import { DatePipe, UpperCasePipe } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ConferenceService } from '../services/conference-service';
import { BookingService } from '../services/booking-service';

@Component({
  selector: 'app-confirmation',
  imports: [DatePipe, UpperCasePipe, RouterLink],
  templateUrl: './confirmation.html',
  styleUrl: './confirmation.css',
})
export class Confirmation {
  private route = inject(ActivatedRoute);
  readonly conferenceService = inject(ConferenceService);
  readonly bookingService = inject(BookingService);

  // Observable -> Signal (paramètre d'URL :id)
  paramMapSignal = toSignal(this.route.paramMap);
  id = computed(() => this.paramMapSignal()?.get('id'));

  // Observable -> Signal (query param ?statut=...)
  queryParamMapSignal = toSignal(this.route.queryParamMap);
  statut = computed(() => this.queryParamMapSignal()?.get('statut'));
}