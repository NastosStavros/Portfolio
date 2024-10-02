import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-privacy',
  standalone: true,
  imports: [RouterModule, TranslateModule],
  templateUrl: './privacy.component.html',
  styleUrl: './privacy.component.scss'
})
export class PrivacyComponent {
  constructor(public translateService: TranslateService) { }

  switchLanguage(): void {
    const currentLang = this.translateService.currentLang;
    const newLang = currentLang === 'de' ? 'en' : 'de';
    this.translateService.use(newLang);
  }
}
