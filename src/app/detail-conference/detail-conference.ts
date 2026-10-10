import { Component, inject, input } from '@angular/core';
import { DatePipe, UpperCasePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ConferenceService } from '../services/conference-service';

@Component({
  selector: 'app-detail-conference',
  imports: [DatePipe, UpperCasePipe, RouterLink],
  templateUrl: './detail-conference.html',
  styleUrl: './detail-conference.css',
})
export class DetailConference {
  readonly conferenceService = inject(ConferenceService);
  id = input.required<string>();
}