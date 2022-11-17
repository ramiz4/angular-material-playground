import { NgModule, LOCALE_ID } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';

import localeDe from '@angular/common/locales/de';
import localeDeCH from '@angular/common/locales/de-CH';
import localeDeExtra from '@angular/common/locales/extra/de';
import localeDeCHExtra from '@angular/common/locales/extra/de-CH';
import { CurrencyPipe, registerLocaleData } from '@angular/common';
import { LocaleService } from './locale.service';
registerLocaleData(localeDe, localeDeExtra);
registerLocaleData(localeDeCH, localeDeCHExtra);

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [
    LocaleService,
    // CurrencyPipe,
    {
      provide: LOCALE_ID,
      deps: [LocaleService],
      useFactory: (LocaleService: { locale: string }) => LocaleService.locale,
    },
  ],
})
export class AppModule {}
