import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'] // Hier sollte 'styleUrls' anstelle von 'styleUrl' sein
})
export class AppComponent implements OnInit { // Implementiere OnInit
  title = 'my-portfolio';

  ngOnInit(): void {
    AOS.init({
      duration: 1000, // Dauer der Animation in Millisekunden
      once: true, // Animation nur einmal ausführen
    });
  }
}
