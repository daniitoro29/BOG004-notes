import { Injectable } from '@angular/core';
import { collectionData, deleteDoc, doc, Firestore, updateDoc } from '@angular/fire/firestore';
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

  deleteNotes(note:Note) {
    const noteDocCollection = doc(this.firestore, `notes/${note.id}`);
    return deleteDoc(noteDocCollection);
  }
   updateNote(note:Note, id: string) {
    const noteCollectionUpdate = doc(this.firestore, 'notes', id);
   return  updateDoc(noteCollectionUpdate, {
      title: 'title eeeee',
      note: 'note aaaaa'
    })
  }

/*   updateNote(): Observable<Note[]>{
    const noteCollectionUpdate = doc(this.firestore, 'notes');
    return updateDoc(noteCollectionUpdate, {
      title: note.title,
      note: note.note
    }) as Observable<Note[]>;
  } */

}
