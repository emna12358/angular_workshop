import { Component, signal } from '@angular/core';
import { Ami } from '../ami/ami';
@Component({
  selector: 'app-amis',
  imports: [Ami],
  templateUrl: './amis.html',
  styleUrl: './amis.css',
})
export class Amis {
  amis = signal([
    { id: 1, nom: 'Ali' },
    { id: 2, nom: 'Sarra' },
    { id: 3, nom: 'Mohamed' },
  ]);
}
