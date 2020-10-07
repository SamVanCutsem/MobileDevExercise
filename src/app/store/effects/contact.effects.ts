import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, switchMap, tap } from 'rxjs/operators';
import * as ContactActions from '@app/store/actions/contact.actions';
import { ContactDataService } from '@app/Providers/contacts-data.service';
import { EMPTY } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactEffects {
  constructor(
    private actions$: Actions,
    private contactDataService: ContactDataService
  ) {}

  fetchContacts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ContactActions.fetchContacts),
      mergeMap(props =>
        this.contactDataService
          .getContacts(props.page)
          .pipe(
            map((contacts) =>
              ContactActions.fetchContactsSuccess({ payload: contacts })
            ),
            catchError(() => EMPTY)
          )
      )
    )
  );
}
