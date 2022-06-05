import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
img: boolean = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }
  // Función para cerrar sesión
  signOut(){
    this.authService
      .logout()
         .then(() => {
           window.alert('Para cerrar sesión, oprime aceptar');
          this.router.navigate([''])
         })
         }
  // Función que lleva a la vista de crear una nueva vista
  newNotes () {
    this.router.navigate(['newnotes']);
  }
      //Esto es un método. Solo se activa cuando le damos click al botón
  showTag(){
    this.img=true;
  }
  }



