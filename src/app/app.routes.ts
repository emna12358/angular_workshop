import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Profil } from './profil/profil';
import { Amis } from './amis/amis';
import { Notifications } from './notifications/notifications';
import { Conference } from './conference/conference';
import { ConferenceList } from './conference-list/conference-list';
import { DetailConference } from './detail-conference/detail-conference';
import { Inscription } from './inscription/inscription';
import { Contact } from './contact/contact';
import { PageIntrouvable } from './page-introuvable/page-introuvable';
import { Confirmation } from './confirmation/confirmation';
export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'profil', component: Profil },
  { path: 'amis', component: Amis },
  { path: 'notifications', component: Notifications },
  { path: 'conference', component: Conference },
  { path: 'conferences', component: ConferenceList },
  { path: 'conferences/:id', component: DetailConference },
  { path: 'confirmation/:id', component: Confirmation },
  { path: 'inscription', component: Inscription },
  { path: 'contact', component: Contact, data: { title: 'Page de contact' } },
  { path: '**', component: PageIntrouvable },
];