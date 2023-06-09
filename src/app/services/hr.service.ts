import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, tap } from 'rxjs';
import { PersonModel } from '../models/person.model';
import { HumanResorces } from '../mocks/hr';

@Injectable({ providedIn: 'root' })
export class HrService {


  private _stuffListSubject: BehaviorSubject<PersonModel[]> = new BehaviorSubject<PersonModel[]>(this._storage.getItem('stuffList') ? JSON.parse(this._storage.getItem('stuffList')!) : HumanResorces);
  public stuffList$: Observable<PersonModel[]> = this._stuffListSubject.asObservable();

    constructor(private _storage: Storage) {
  }

  getAll(): Observable<PersonModel[]> {
    return this.stuffList$;
  }

    createNewPerson(mesel: number, firstname: string, lastname: string, arrivalDate: Date, birthday: Date, roleId: string): void {
    const newStuff = [...this._stuffListSubject.value, { mesel, firstname, lastname, arrivalDate, birthday, roleId }]
      this._storage.setItem('stuffList', JSON.stringify(newStuff))
      this._stuffListSubject.next(newStuff)
  }

    deletePerson(mesel: number): void {
        const newStuff = this.stuffList$.pipe(map(list => list.filter(member => mesel !== member.mesel)))
        this._storage.setItem('stuffList', JSON.stringify(newStuff))
  }
};


