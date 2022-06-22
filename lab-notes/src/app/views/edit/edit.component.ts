import { ChangeDetectionStrategy, ChangeDetectorRef, Component, defineInjectable, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { lastValueFrom, take } from 'rxjs';
import Note from 'src/app/interfaces/notes.interface';
import { FirestoreService } from 'src/app/services/firestore.service';
import { SendInformationService } from 'src/app/services/send-information.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditComponent implements OnInit {
  public formNotes: FormGroup;
  public noteId: any;
  public idFilter: any;
  public getInformationNotes: any[] = [];
  public noteSelected: any;

  constructor(
    private firestoreService: FirestoreService,
    public formBuilder: FormBuilder,
    private router: Router,
    private sendInformationServices: SendInformationService,
    private ref: ChangeDetectorRef,
  ) {
    this.formNotes = this.formBuilder.group({
      title: [''],
      note: [''],
    });
    ref.detach();
    setInterval(() => {
      this.ref.detectChanges();
      this.getNoteForEdit();
    }, 5000);
  }

  async ngOnInit() {
    await this.getNoteForEdit();
    //this.getInformationNotes = await this.getInformation(this.noteId);
    /* if (this.getInformationNotes.length === 0) {
      this.returnView();
    } else {
      this.noteSelected = this.getInformationNotes;
      console.log(
        '🚀 ~ file: edit.component.ts ~ line 40 ~ EditComponent ~ ngOnInit ~ note',
        this.getInformationNotes
      );
    }*/
    console.log("🚀 ~ file: edit.component.ts ~ line 46 ~ EditComponent ~ .subscribe ~ noteId", this.noteId)
  }

  getNoteForEdit() {
    return new Promise<string>((resolve, reject) => {
     this.sendInformationServices.dispatchSendId.subscribe((data) => {
         this.noteId = data;
         resolve(this.noteId);
         console.log("🚀 ~ file: edit.component.ts ~ line 54 ~ EditComponent ~ .subscribe ~ noteId", this.noteId.data.id)
       });
     });
  }

  getInformation(id: string) {
    return new Promise<any[]>((resolve, reject) => {
      this.firestoreService
        .getNotes()
        .pipe(take(1))
        .subscribe((data) => {
          this.idFilter = data.filter((element) => element.id == id);
          resolve(this.idFilter);
        });
    });
  }

  /*   getInformation(id: string){
    return new Promise((resolve, reject) => {
      this.firestoreService.getNotes().pipe(take(1)).subscribe(data => {
        this.idFilter = data.filter((element)=> element.id == id );
      console.log((data.filter((element)=> element.id == id )), '*************************************');

         resolve(data.filter((element)=> element.id == id ));
      })
        reject('Esto es un error')
    })


  } */

  returnView() {
    this.router.navigate(['home']);
  }
  /*   onClickUpdate(note:Note, id:string ){
    this.firestoreService.updateNote(note, id)
    .then(()=>{
      note.title = this.formNotes.value;
      console.log('aaaaaaaaaaaa', this.formNotes.value, note.id);
    });
  }

  updateNote(){
    this.getNoteForEdit();
     this.onClickUpdate(note, id);
    this.formNotes.reset();
    this.router.navigate(['home']);
  }
 */

  //(click)="onClickUpdate(unitNote, unitNote.id)
}
