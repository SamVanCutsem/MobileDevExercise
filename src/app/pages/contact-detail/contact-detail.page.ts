import { Component, OnInit } from '@angular/core';
import { Contact } from '@app/models/contact';
import { Observable } from 'rxjs/internal/Observable';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import * as fromContacts from '@app/store/reducers/contact.reducer';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.page.html',
  styleUrls: ['./contact-detail.page.scss'],
})
export class ContactDetailPage implements OnInit {
  contact$: Observable<Contact>;

  constructor(private store: Store, private route: ActivatedRoute) {}

  get contactId(): number {
    return Number(this.route.snapshot.paramMap.get('contactId'));
  }

  ngOnInit() {
    this.contact$ = this.store.pipe(
      select(fromContacts.selectContact, {
        contactId: this.contactId,
      })
    );
  }
}
