import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { ClickCatcherDirective } from './clickcatcher.directive';

@NgModule({
  declarations: [
    AppComponent,ClickCatcherDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
