import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeopleListComponent } from './components/people-list/people-list.component';
import { PeopleListComponentModule } from './components/people-list/people-list.component-module';

const routes: Routes = [{ path: 'people', component: PeopleListComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes), PeopleListComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
