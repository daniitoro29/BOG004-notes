import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  constructor(private authService: AuthService,  private route: Router) { }

  ngOnInit(): void {
  }

  loginGoogle(){
    this.authService.loginWithGoogle()
      .then(res=> {
        if(res) {
          this.route.navigate(['home']);
        }
        })
  }

}
