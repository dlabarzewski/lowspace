import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-homepage',
  styleUrls: ['./homepage.component.scss'],
  templateUrl: './homepage.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomepageComponent {
  // readonly userInfo$: Observable<UserInfoModel> = this._userService.userData();
  private _menuSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  public menu$: Observable<boolean> = this._menuSubject.asObservable();

  constructor(


  ) {}
  onAvatarClicked() {
    this._menuSubject.value
      ? this._menuSubject.next(false)
      : this._menuSubject.next(true);
  }
 
}
