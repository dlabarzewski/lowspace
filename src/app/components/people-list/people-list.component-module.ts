import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PeopleListComponent } from './people-list.component';

@NgModule({
  imports: [CommonModule],
  declarations: [PeopleListComponent],
  providers: [],
  exports: [PeopleListComponent]
})
export class PeopleListComponentModule {
}
