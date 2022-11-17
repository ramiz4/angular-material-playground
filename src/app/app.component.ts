import { Component } from '@angular/core';

import {
  formatCurrency,
  getLocaleCurrencyCode,
  formatNumber,
} from '@angular/common';
import { LocaleService } from './locale.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  amount = 150899.86;

  localeCurrencyCode = getLocaleCurrencyCode(this.localeService.locale);
  amountFormattedNumber = '';
  amountFormattedCurrency = '';
  hide = true;

  constructor(private localeService: LocaleService) {
    this.setLocale();
  }

  setLocale(locale?: string) {
    this.localeService.registerCulture(locale);

    this.localeCurrencyCode = getLocaleCurrencyCode(this.localeService.locale);
    this.amountFormattedNumber = formatNumber(
      this.amount,
      this.localeService.locale
    );
    this.amountFormattedCurrency = formatCurrency(
      this.amount,
      this.localeService.locale,
      this.localeCurrencyCode
    );
  }
}
