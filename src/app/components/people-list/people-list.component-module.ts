import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { PeopleListComponent } from './people-list.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [PeopleListComponent],
  providers: [],
  exports: [PeopleListComponent]
})
export class PeopleListComponentModule {
}
