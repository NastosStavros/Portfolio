import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'; // Importiere CommonModule

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule], // Füge CommonModule zu den Imports hinzu
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isMenuVisible = false; // Menü-Status

  // Funktion zum Anzeigen/Verstecken des Menüs
  toggleMenu() {
    this.isMenuVisible = !this.isMenuVisible;
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 100; // Anpassung des Offsets, um das Überscrollen zu verhindern
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      // Menü schließen, wenn eine Navigation erfolgt
      this.isMenuVisible = false;
    }
  }
}
