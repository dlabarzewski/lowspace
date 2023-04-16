import { Injectable } from '@angular/core';
import { GenerateMeselModel } from '../models/generate-mesel.model';

@Injectable({ providedIn: 'root' })
export class MeselGeneratorHelper {
  generate(model: GenerateMeselModel): string {

    const birthYear = (model.birthDate.getFullYear() % 100).toString().padStart(2, '0');
    const arrivalYear = (model.arrivalDate.getFullYear() % 100).toString().padStart(2, '0');
    const index = (model.yearBornPeopleCount + 1).toString().padStart(4, '0');

    return `${
      birthYear
    }${
      arrivalYear
    }${
      model.gender
    }${
      index
    }`;
  }
}
