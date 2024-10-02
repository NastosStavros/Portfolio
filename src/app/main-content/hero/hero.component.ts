import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'; // Importiere CommonModule
import { TranslateModule, TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterModule, CommonModule, TranslateModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

  constructor(public translateService: TranslateService) {}

  
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
    }
  }
}

