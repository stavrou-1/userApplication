import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalServiceService {
  private modals: any[] = [];

  // TODO
  add(modal: any) {
    this.modals.push(modal);
  }

  remove(id: String) {
    this.modals = this.modals.filter(x => x.id !== id);
  }

  open(id: String) {
    let modal: any = this.modals.filter(x => x.id === id)[0];
    modal.open();
  }

  close(id: String) {
    let modal: any = this.modals.filter(x => x.id === id)[0];
    modal.close();
  }
}
