import { Component, input, model } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-conference-detail',
  imports: [DatePipe],
  templateUrl: './conference-detail.html',
  styleUrl: './conference-detail.css',
})
export class ConferenceDetail {
  titre = model<string>('');
  description = input<string>();
  date = input<Date>();
  lieu = input<string>();
}