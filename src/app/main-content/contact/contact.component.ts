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
    console.log(this.contactForm.value);
  }
}

