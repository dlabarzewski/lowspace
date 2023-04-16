import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { HomepageComponentModule } from './components/homepage/homepage.component-module';
import { PeopleListComponent } from './components/people-list/people-list.component';
import { PeopleListComponentModule } from './components/people-list/people-list.component-module';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'people', component: PeopleListComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    HomepageComponentModule,
    PeopleListComponentModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
