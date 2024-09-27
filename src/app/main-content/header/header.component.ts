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

 
private headerOffsets: { [key: string]: number } = {
  'about-me': 80,
  'skills': 100,
  'portfolio': 30
};

// Ändern Sie die scrollToSection-Funktion, um die headerOffset aus dem Objekt zu verwenden
scrollToSection(sectionId: string, event?: Event) {
  if (event) {
    event.preventDefault(); // Verhindert das Standard-Verhalten des Links
  }
  
  const element = document.getElementById(sectionId);
  if (element) {
    const headerOffset = this.headerOffsets[sectionId] || 100; // Verwenden Sie die headerOffset aus dem Objekt oder verwenden Sie eine Standardwerte von 100
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
