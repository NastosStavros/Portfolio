import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [NgFor,CommonModule, RouterModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  skills = [
    { name: 'HTML', icon: 'assets/icons/html.png' },
    { name: 'CSS', icon: 'assets/icons/css.png' },
    { name: 'JavaScript', icon: 'assets/icons/javascript.png' },
    { name: 'TypeScript', icon: 'assets/icons/typescript.png' },
    { name: 'Angular', icon: 'assets/icons/angular.png' },
    { name: 'Firebase', icon: 'assets/icons/firebase.png' },
    { name: 'Git', icon: 'assets/icons/git.png' },
    { name: 'REST API', icon: 'assets/icons/rest_api.png' },
    { name: 'Scrum', icon: 'assets/icons/scrum.png' },
    { name: 'Material Design', icon: 'assets/icons/material_design.png' },
    { name: 'Continually Learning', icon: 'assets/icons/learning.svg' }
  ];

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

