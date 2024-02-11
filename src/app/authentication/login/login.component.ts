import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { routes } from 'src/app/shared/routes/routes';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public routes = routes;
  public passwordClass = false;
  form = new FormGroup<any>({
    userName: new FormControl(null, [Validators.required, Validators.minLength(3)]),
    password: new FormControl(null, [Validators.required, Validators.minLength(3)]),
  });;

  get f() {
    return this.form.controls;
  }

  constructor(public auth: AuthService, private router: Router) {
  }
  ngOnInit(): void {
  }

  loginFormSubmit() {
    if (this.form.valid) {
      this.auth.login({userName: this.form.value.userName, password: this.form.value.password}).subscribe(res => {
        this.auth.storeToken(res.token);
        this.router.navigate([routes.adminDashboard]);
      });
    }
  }
  togglePassword() {
    this.passwordClass = !this.passwordClass;
  }
}
