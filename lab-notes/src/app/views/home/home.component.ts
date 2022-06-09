import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Note from 'src/app/interfaces/notes.interface';
import { AuthService } from 'src/app/services/auth.service';
import { FirestoreService } from 'src/app/services/firestore.service';
import { SendInformationService } from 'src/app/services/send-information.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
img: boolean = false;
  listNotes : any;

  constructor(private authService: AuthService, private router: Router,  private sendInformationServices:SendInformationService, private firestoreService: FirestoreService) { }

  ngOnInit(): void {
    this.getInformation();
  }

  getInformation(){
    this.firestoreService.getNotes().subscribe(data => {
    return this.listNotes = data ;
    })
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

  async onClickDelete(note:Note){
    const response = await this.firestoreService.deleteNotes(note);
    console.log(response);

  }

  }



