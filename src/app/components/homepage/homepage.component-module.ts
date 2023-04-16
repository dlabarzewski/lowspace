import { NgModule } from '@angular/core';
import { HomepageComponent } from './homepage.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [RouterModule, CommonModule],
  declarations: [HomepageComponent],
  providers: [],
  exports: [HomepageComponent],
})
export class HomepageComponentModule {}
