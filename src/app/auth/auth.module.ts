// vendor
import { NgModule } from '@angular/core';

// services
import { AuthService } from './auth.service';

// guards
import { AuthGuard } from './auth.guard';

/**
 * Authentication module.
 * @preferred
 */
@NgModule({
  providers: [
    // services
    AuthService,
    // guards
    AuthGuard,
  ],
})
export class AuthModule {}
