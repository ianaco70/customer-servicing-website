// vendor
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

/**
 * Service for checking user authentications.
 */
@Injectable()
export class AuthService {
  user = { status: true };

  /**
   * @return observable of user status.
   */
  checkPermissions() {
    // mock returned auth.
    return of(this.user.status);
  }
}
