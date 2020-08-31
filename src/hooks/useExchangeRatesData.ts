import axios from 'axios';
import { API_BASE_URL } from '../utils';
import { useState } from 'react';
import { ExchangeRatesData } from '../types';

export const useExchangeRatesData = (date: string) => {
  const [error, setError] = useState<boolean>(false);

  const getExchangeRatesData = async () => {
    try {
      const { data } = (await axios.get(
        `${API_BASE_URL}/${date}`
      )) as ExchangeRatesData;
      const currencies = Object.keys(data?.rates);
      const baseCurrency = data?.base;
      const initialRate = Number(data?.rates[currencies[0]]);
      return { currencies, baseCurrency, initialRate };
    } catch (e) {
      setError(true);
    }
  };
  return { getExchangeRatesData, exchangeRatesDataError: error };
};
