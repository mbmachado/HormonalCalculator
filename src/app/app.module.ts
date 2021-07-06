import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbTabsetModule, NbCardModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { AppRoutingModule } from './app-routing.module';

const NB_MEDULES = [
  NbCardModule,
  NbTabsetModule,
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'pharma' }),
    NbLayoutModule,
    NbEvaIconsModule,
    AppRoutingModule,

    ...NB_MEDULES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
