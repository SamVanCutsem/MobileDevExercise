import { Action, createReducer, createSelector, on } from '@ngrx/store';
import * as ContactActions from '@app/store/actions/contact.actions';
import { Contact } from '@app/models/contact';

export interface ContactState {
  contacts: Contact[];
  isLoading: boolean;
}

export const initialContactState: ContactState = {
  contacts: [],
  isLoading: false,
};

const contactReducer = createReducer(
  initialContactState,
  on(ContactActions.fetchContactsSuccess, (state, { payload }) => ({
    ...state,
    contacts: state.contacts.concat(payload),
  })),
  on(ContactActions.clearContacts, () => initialContactState),
  on(ContactActions.updateContactPicture, (state, { contactId, picture }) => {
    const newContacts: Contact[] = [];

    state.contacts.forEach((contact: Contact) => {
      newContacts.push({
        firstName: contact.firstName,
        id: contact.id,
        lastName: contact.lastName,
        phoneNumber: contact.phoneNumber,
        picture: contact.id === contactId ? picture : contact.picture,
        email: contact.email,
        birthDate: contact.birthDate,
        company: contact.company,
        street: contact.street,
        city: contact.city,
        zipCode: contact.zipCode,
        country: contact.country,
      });
    });

    return {
      ...state,
      contacts: newContacts,
    };
  })
);

export function reducer(state: ContactState | undefined, action: Action) {
  return contactReducer(state, action);
}

export const contactState = (state) => state.contacts;

export const selectContacts = createSelector(contactState, (state) => {
  return state.contacts;
});

export const selectContact = createSelector(contactState, (state, props) => {
  return state.contacts.find(
    (contact: Contact) => contact.id === props.contactId
  );
});
