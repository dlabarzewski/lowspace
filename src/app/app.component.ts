import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { PersonModel } from './models/person.model';
import { HrService } from './services/hr.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lowspace';
 
}
