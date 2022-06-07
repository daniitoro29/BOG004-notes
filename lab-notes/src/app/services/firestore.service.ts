import { Injectable } from '@angular/core';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { addDoc, collection } from 'firebase/firestore';
import { Observable } from 'rxjs';
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

  getNotes (): Observable<Note[]>{
    const noteCollection = collection(this.firestore, 'notes');
    return collectionData(noteCollection, {idField: 'id'}) as Observable<Note[]>;
  }
}
