import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-impressum',
  standalone: true,
  imports: [RouterModule, TranslateModule],
  templateUrl: './impressum.component.html',
  styleUrls: ['./impressum.component.scss']
})
export class ImpressumComponent {
  constructor(public translateService: TranslateService) { }

  switchLanguage(): void {
    const currentLang = this.translateService.currentLang;
    const newLang = currentLang === 'de' ? 'en' : 'de';
    this.translateService.use(newLang);
  }
}
