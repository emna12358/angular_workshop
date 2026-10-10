import { Component, input } from '@angular/core';

@Component({
  selector: 'app-ami',
  imports: [],
  templateUrl: './ami.html',
  styleUrl: './ami.css',
})
export class Ami {
  nom = input<string>();
}
