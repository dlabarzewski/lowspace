import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { HomepageComponentModule } from './components/homepage/homepage.component-module';

const routes: Routes = [{ path: '', component: HomepageComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes), HomepageComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
