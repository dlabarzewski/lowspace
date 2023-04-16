import { Gender } from "../statics/gender.static";

export interface GenerateMeselModel {
  readonly birthDate: Date;
  readonly arrivalDate: Date;
  readonly gender: Gender;
  readonly yearBornPeopleCount: number;
}
