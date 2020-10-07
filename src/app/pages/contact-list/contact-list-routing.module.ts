import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactListPage } from './contact-list.page';

const routes: Routes = [
  {
    path: '',
    component: ContactListPage,
  },
  {
    path: 'contact-detail/:contactId',
    loadChildren: () =>
      import('@app/pages/contact-detail/contact-detail.module').then(
        (m) => m.ContactDetailPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactListRoutingModule {}
