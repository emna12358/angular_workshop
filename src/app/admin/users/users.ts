import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-users',
  imports: [],
  templateUrl: './users.html',
  styleUrl: './users.css',
})
export class Users {
  users = signal([
    { id: 1, nom: 'Ali' },
    { id: 2, nom: 'Sarra' },
    { id: 3, nom: 'Mohamed' },
  ]);
}