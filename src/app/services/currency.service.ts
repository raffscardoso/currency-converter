import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  private apiUrl = `https://v6.exchangerate-api.com/v6/`;
  constructor() {}
}
