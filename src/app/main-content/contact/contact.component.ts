import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    CommonModule,
    RouterModule,
    TranslateModule,

  ],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {



  http = inject(HttpClient);

  contactForm: FormGroup;
  matcher = new ErrorStateMatcher();

  messageSent = false;

  post = {
    endPoint: 'https://stavros-nastos.com/sendMail.php', // Dein PHP-Skript
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
      },
    },
  };

  contact: any = {}; // Initialize as an empty object






  constructor(private fb: FormBuilder, private translateService: TranslateService) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],  // Hier müssen die Validatoren in ein Array gesetzt werden
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]],
      terms: [false, Validators.requiredTrue]
    });

    this.translateService.get('contact').subscribe((translations) => {
      this.contact = translations; // Set the contact object
    });
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  public removeValidators() {
    this.contactForm.get('name')?.clearValidators();
    this.contactForm.get('email')?.clearValidators();
    this.contactForm.get('message')?.clearValidators();
    this.contactForm.get('terms')?.clearValidators();
    this.contactForm.get('name')?.updateValueAndValidity();
    this.contactForm.get('email')?.updateValueAndValidity();
    this.contactForm.get('message')?.updateValueAndValidity();
    this.contactForm.get('terms')?.updateValueAndValidity();
  }

  get isFormValid() {
    return this.contactForm.valid;
  }
  onSubmit() {
    if (this.contactForm.valid) {
      this.http.post(this.post.endPoint, this.post.body(this.contactForm.value), this.post.options)
        .subscribe({
          next: (response) => {
            this.contactForm.reset(); // Reset the form after submission
            this.messageSent = true; // Show the success message
            this.removeValidators();
            setTimeout(() => {
              this.messageSent = false; // Hide the message after 3 seconds
            }, 3000);
          },
          error: (error: HttpErrorResponse) => {
            console.error('Fehler beim Senden der E-Mail:', error);
          }
        });
    }
  }
}


