// vendor
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// feature modules
import { AppRoutingModule } from './app-routing.module';

// containers
import { AppComponent } from './app.component';
import { routedComponents } from './app-routing.module';

// components

// directives

// pipes

// services
@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    // containers
    AppComponent,
    routedComponents
    // components
    // directives
  ],
  exports: [],
  imports: [
    // vendor
    BrowserModule,
    NgbModule.forRoot()
    // feature
  ],
  providers: [
    // services
  ]
})
export class AppModule {}
