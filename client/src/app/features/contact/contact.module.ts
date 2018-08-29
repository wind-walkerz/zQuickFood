import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
      RouterModule.forChild([{path: '', component: ContactComponent}])
  ],
  declarations: [ContactComponent]
})
export class ContactModule { }
