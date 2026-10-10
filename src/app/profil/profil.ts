import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-profil',
  imports: [],
  templateUrl: './profil.html',
  styleUrl: './profil.css',
})
export class Profil {
  nom = signal('Emna');
  imageUrl = signal('https://picsum.photos/200');
  imageAlt = signal('Photo de profil');
  connecte = signal(true);

  changerStatut() {
    this.connecte.update(v => !v);
  }
}
