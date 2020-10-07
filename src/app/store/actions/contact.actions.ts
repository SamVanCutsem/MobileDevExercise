import { Contact } from '@app/models/contact';
import { createAction, props } from '@ngrx/store';

export const fetchContacts = createAction(
  '[ContactList Page] Fetch Contact List',
  props<{ page: number }>()
);

export const fetchContactsSuccess = createAction(
  '[Contacts API] Fetch Contact List Success',
  props<{ payload: Contact[] }>()
);

export const clearContacts = createAction(
  '[ContactList Page] Clear Contact List'
);

export const updateContactPicture = createAction(
  '[Content Detail Page] Update Profile Picture',
  props<{ contactId: number; picture: string }>()
);
