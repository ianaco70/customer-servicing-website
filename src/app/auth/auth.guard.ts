// vendor
import { Injectable } from '@angular/core';
import { CanLoad, CanActivate, CanActivateChild } from '@angular/router';

// services
import { AuthService } from './auth.service';

/**
 * Authentication based guard.
 */
@Injectable()
export class AuthGuard implements CanLoad, CanActivate, CanActivateChild {
  constructor(private authService: AuthService) {}

  canLoad() {
    return this.authService.checkPermissions();
  }

  canActivate() {
    return this.authService.checkPermissions();
  }

  canActivateChild() {
    return this.authService.checkPermissions();
  }
}
