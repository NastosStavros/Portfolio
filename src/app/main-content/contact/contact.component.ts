import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    CommonModule,
    RouterModule
  ],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  http = inject(HttpClient);

  contactForm: FormGroup;
  matcher = new ErrorStateMatcher();

  post = {
    endPoint: 'https://stavros-nastos.com/sendMail.php', // Dein PHP-Skript
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  };

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: [''],
      terms: [false, Validators.requiredTrue]
    });
  }

  get isFormValid() {
    return this.contactForm.valid;
  }
  onSubmit() {
    if (this.contactForm.valid) {
      this.http.post(this.post.endPoint, this.post.body(this.contactForm.value), this.post.options)
        .subscribe({
          next: (response) => {
            console.log('E-Mail erfolgreich gesendet:', response);
            this.contactForm.reset(); // Reset the form after submission
          },
          error: (error) => {
            console.error('Fehler beim Senden der E-Mail:', error);
          }
        });
    }
  }
}


