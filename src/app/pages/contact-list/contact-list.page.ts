import { Component, ViewChild, OnInit } from '@angular/core';
import { Contact } from '@app/models/contact';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromContacts from '@app/store/reducers/contact.reducer';
import * as ContactActions from '@app/store/actions/contact.actions';

@Component({
  selector: 'app-contact-list',
  templateUrl: 'contact-list.page.html',
  styleUrls: ['contact-list.page.scss'],
})
export class ContactListPage implements OnInit {
  contacts$: Observable<Contact[]> = this.store.pipe(
    select(fromContacts.selectContacts)
  );

  constructor(private store: Store) {}
  ngOnInit(): void {
    this.store.dispatch(ContactActions.fetchContacts({ page: 1 }));
  }

  loadData($event, amount: number) {
    this.store.dispatch(ContactActions.fetchContacts({ page: amount  / 10 + 1 }));
    $event.target.complete();
  }

  doRefresh($event): void {
    this.store.dispatch(ContactActions.clearContacts());
    this.store.dispatch(ContactActions.fetchContacts({ page: 1 }));
    $event.target.complete();
  }
}
