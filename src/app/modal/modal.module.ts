import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal.component';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [ModalComponent],
  imports: [
    CommonModule,
    GooglePlaceModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  exports: [ModalComponent]
})
export class ModalModule { }
