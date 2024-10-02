import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'; // Importiere CommonModule
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule, TranslateModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isMenuVisible = false; // Menü-Status

  constructor(public translateService: TranslateService) {}

  // Funktion zum Anzeigen/Verstecken des Menüs
  toggleMenu() {
    this.isMenuVisible = !this.isMenuVisible;
  }

  // Funktion zum Wechseln der Sprache
  switchLanguage() {
    const newLang = this.translateService.currentLang === 'de' ? 'en' : 'de';
    this.translateService.use(newLang);
  }

  private headerOffsets: { [key: string]: number } = {
    'about-me': 80,
    'skills': 100,
    'portfolio': 30
  };

  // Funktion zum Scrollen zu bestimmten Abschnitten
  scrollToSection(sectionId: string, event?: Event) {
    if (event) {
      event.preventDefault(); // Verhindert das Standard-Verhalten des Links
    }

    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = this.headerOffsets[sectionId] || 100; // Standardwert von 100 verwenden
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }
}
