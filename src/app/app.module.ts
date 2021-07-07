import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbTabsetModule, NbCardModule, NbInputModule, NbButtonModule, NbRadioModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ExamsComparatorComponent } from './exams-comparator/exams-comparator.component';
import { ConversionsTableComponent } from './conversions-table/conversions-table.component';

const NB_MEDULES = [
  NbCardModule,
  NbTabsetModule,
  NbInputModule,
  NbButtonModule,
  NbRadioModule,
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
    ReactiveFormsModule,

    ...NB_MEDULES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
