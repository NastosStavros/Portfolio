import { Routes } from '@angular/router';
import { ImpressumComponent } from './impressum/impressum.component'; // Import der Impressum-Komponente
import { MainContentComponent } from './main-content/main-content.component';
import { PrivacyComponent } from './privacy/privacy.component';

export const routes: Routes = [
    { path: '', component: MainContentComponent }, // Route für das Impressum
    { path: 'impressum', component: ImpressumComponent },
    { path: 'privacy', component: PrivacyComponent },

];
