import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './views/login/login.component';
import { HomeComponent } from './views/home/home.component';
import { NewNotesComponent } from './views/new-notes/new-notes.component';
import { AngularFireModule } from '@angular/fire/compat';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditComponent } from './views/edit/edit.component';


/* const firebaseConfig = {
  apiKey: "AIzaSyDzRXSb42PnyBs6nGdJObJ-nRgxO_V3Xrc",
  authDomain: "labnotes-notiks.firebaseapp.com",
  projectId: "labnotes-notiks",
  storageBucket: "labnotes-notiks.appspot.com",
  messagingSenderId: "374898730928",
  appId: "1:374898730928:web:5a666bad98dc1916d4d875"
}; */

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NewNotesComponent,
    EditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
