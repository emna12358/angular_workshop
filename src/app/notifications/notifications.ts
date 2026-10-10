import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-notifications',
  imports: [],
  templateUrl: './notifications.html',
  styleUrl: './notifications.css',
})
export class Notifications {
  notifications = signal([
    { id: 1, message: 'Nouvelle conférence ajoutée' },
    { id: 2, message: 'Rappel : conférence demain à 10h' },
  ]);
}
