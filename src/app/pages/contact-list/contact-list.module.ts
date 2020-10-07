import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ContactListPage } from './contact-list.page';

import { ContactListRoutingModule } from './contact-list-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContactListRoutingModule
  ],
  declarations: [ContactListPage]
})
export class ContactListModule {}
