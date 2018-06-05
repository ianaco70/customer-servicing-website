// vendor
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';

// feature modules
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';

// containers
import { AppComponent } from './app.component';

// components

// directives

// pipes

// services

// guards
import { AuthGuard } from './auth/auth.guard';

// routes
export const ROUTES: Routes = [{ path: '**', redirectTo: '' }];
@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    // containers
    AppComponent,
    // components
  ],
  exports: [],
  imports: [
    // vendor
    BrowserModule,
    HttpClientModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(ROUTES),
    // feature
    AuthModule,
    SharedModule,
  ],
  providers: [
    // services
  ],
})
export class AppModule {}
