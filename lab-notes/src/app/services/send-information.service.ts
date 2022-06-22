import { EventEmitter, Injectable, Output } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class SendInformationService {
  @Output() dispatchSendId: EventEmitter<any>= new EventEmitter();
  @Output() dispatchSendInformation: EventEmitter<any>= new EventEmitter();
  constructor() { }
}
