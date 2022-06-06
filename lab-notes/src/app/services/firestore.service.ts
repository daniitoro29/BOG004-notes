import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { addDoc, collection } from 'firebase/firestore';
import Note from '../interfaces/notes.interface';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: Firestore) { }

  addNote(note:Note){
    const noteCollection = collection(this.firestore, 'notes');
    return addDoc(noteCollection, note);
  }
}
