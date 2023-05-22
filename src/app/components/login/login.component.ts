import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string='';
  password: string='';
  emailInvalid: boolean=false;
  passwordInvalid: boolean=false;

  login() {
    // Reset validation flags
    this.emailInvalid = false;
    this.passwordInvalid = false;

    // Email validation using regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.email)) {
      this.emailInvalid = true;
      return; // Stop login if email is invalid
    }

    // Password validation
    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*]).*$/;
    if (!passwordRegex.test(this.password)) {
      this.passwordInvalid = true;
      return; // Stop login if password is invalid
    }

    // Continue with login logic
    // ...
  }
}


