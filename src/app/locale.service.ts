import { Injectable } from '@angular/core';

@Injectable()
export class LocaleService {
  constructor() {}

  private _locale: string;

  set locale(value: string) {
    this._locale = value;
  }
  get locale(): string {
    return this._locale || 'en-US';
  }

  public registerCulture(culture?: string) {
    if (!culture) {
      this._locale = 'en';
      return;
    }
    this._locale = culture;
    console.log('Application Culture Set to ' + this._locale);
  }
}
