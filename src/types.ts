export interface ExchangeRatesData {
  data: {
    base: string;
    date: string;
    rates: { [key: string]: string };
  };
}
