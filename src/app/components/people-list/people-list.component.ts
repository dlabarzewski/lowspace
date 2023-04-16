import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, take } from 'rxjs';
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
  readonly form: FormGroup = new FormGroup({
    mesel: new FormControl(),
    firstname: new FormControl(),
    lastname: new FormControl(),
    arrivalDate: new FormControl(),
    birthday: new FormControl(),
    roleId: new FormControl(),
  });

  constructor(private _hrService: HrService) {
  }

  onFormSubmitted(form: FormGroup): void {
    if (form.invalid) {
      return
    }
    this._hrService.createNewPerson(
      form.value.mesel,
      form.value.firstname,
      form.value.lastname,
      form.value.arrivalDate,
      form.value.birthday,
      form.value.roleId
    )
    window.location.reload
  }
}
