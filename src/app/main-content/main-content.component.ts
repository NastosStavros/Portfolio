import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../main-content/header/header.component';
import { AboutMeComponent } from '../main-content/about-me/about-me.component';
import { SkillsComponent } from '../main-content/skills/skills.component';
import { PortfolioComponent } from '../main-content/portfolio/portfolio.component';
import { ContactComponent } from '../main-content/contact/contact.component';
import { FooterComponent } from '../main-content/footer/footer.component';
import { HeroComponent } from './hero/hero.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    HeroComponent,
    HeaderComponent,
    AboutMeComponent,
    SkillsComponent,
    PortfolioComponent,
    ContactComponent,
    FooterComponent
  ],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
