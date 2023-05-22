import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {


  email: string='';

  
  password: string='';
  confirmPassword: string='';
  emailValid: boolean = true;
  passwordsMatch: boolean = true;

  register() {
    this.emailValid = this.validateEmail();
    this.passwordsMatch = this.validatePasswords();

    if (this.emailValid && this.passwordsMatch) {
      // Logic to insert the user's data into the database or perform further actions
    }
  }

  validateEmail(): boolean {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(this.email);
  }

  validatePasswords(): boolean {
    return this.password === this.confirmPassword;
  }
}
