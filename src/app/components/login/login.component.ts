import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginCredentials } from 'src/app/models/LoginCredentials';
import { LoginService } from 'src/app/services/login-service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private loginService: LoginService) { }

  ngOnInit() {
    this.createFormGroup();
  }

  createFormGroup() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  async login() {
    if (this.loginForm.valid) {
      console.log('Valid form details');
      const loginDetails: LoginCredentials = new LoginCredentials(this.loginForm.value);
      console.log('Login Request value: ', loginDetails);
      return await this.loginService.login(loginDetails);
    } else {
      console.log('Invalid form data');
    }
  }

}
