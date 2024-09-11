import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [NgFor,CommonModule],
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
}
