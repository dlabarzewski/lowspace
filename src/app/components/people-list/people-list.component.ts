import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PersonModel } from '../../models/person.model';
import { HrService } from '../../services/hr.service';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PeopleListComponent {
  list$: Observable<PersonModel[]> = this._hrService.getAll();

  constructor(private _hrService: HrService) {
  }
}
