import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: String = "";
  password: String = "";

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.username, this.password)
      .subscribe(
        response => {
          this.router.navigate(['/home']);
        },
        error => {
          console.log(error);
          console.log('username:', this.username);
          console.log('password:', this.password);
        }
      );
  }

}
