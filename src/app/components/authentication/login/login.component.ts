// angular import
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { LoginService } from 'src/app/api/services';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export default class LoginComponent {
  constructor(
    private _loginService: LoginService,
    private router: Router
  ) {}
  navigateToDashBoard() {
    this.router.navigate(['/manages/user/user-list']);
  }
}
