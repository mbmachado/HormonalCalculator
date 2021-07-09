import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { ExamsComparatorComponent } from './exams-comparator/exams-comparator.component';
import { ConversionsTableComponent } from './conversions-table/conversions-table.component';

import {
  NbThemeModule,
  NbLayoutModule,
  NbTabsetModule,
  NbCardModule,
  NbInputModule,
  NbButtonModule,
  NbRadioModule,
  NbIconModule
} from '@nebular/theme';

const NB_MEDULES = [
  NbCardModule,
  NbTabsetModule,
  NbInputModule,
  NbButtonModule,
  NbRadioModule,
  NbIconModule,
];

@NgModule({
  declarations: [
    AppComponent,
    ExamsComparatorComponent,
    ConversionsTableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'pharma' }),
    NbLayoutModule,
    NbEvaIconsModule,
    AppRoutingModule,
    FormsModule,

    ...NB_MEDULES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
