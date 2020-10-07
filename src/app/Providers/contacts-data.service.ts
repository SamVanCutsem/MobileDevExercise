import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Contact } from '@app/models/contact';

@Injectable({
  providedIn: 'root',
})
export class ContactDataService {
  constructor(private httpClient: HttpClient) {}

  getContacts(page: number): Observable<Contact[]> {
    let params = new HttpParams();
    params = params.append('page', page.toString());

    return this.httpClient.get<Contact[]>('contacts', {
      params,
    });
  }

  getContact(contactId: number): Observable<Contact> {
    return this.httpClient.get<Contact>(`contacts/${contactId}`);
  }
}
