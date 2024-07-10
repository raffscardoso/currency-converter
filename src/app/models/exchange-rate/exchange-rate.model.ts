export interface ExchangeRate {
  base_code: string;
  conversion_rates: { [key: string]: number };
}
