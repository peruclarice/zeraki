import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared/shared.module';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent {

  signInForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });

  constructor(private router: Router) { }

  onSubmit() {
    console.log(this.signInForm.value);
    if (this.signInForm.valid) {
      // Navigate to the student overview page
      this.router.navigate(['/student/overview']);
    }
  }

  get email() {
    return this.signInForm.get('email');
  }

  get password() {
    return this.signInForm.get('password');
  }
}
