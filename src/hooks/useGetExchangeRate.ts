import axios from 'axios';
import { API_BASE_URL } from '../utils';
import { useState } from 'react';
import { ExchangeRatesData } from '../types';

export const useGetExchangeRate = (date: string) => {
  const [error, setError] = useState<boolean>(false);
  const getNewExchangeRate = async (
    fromCurrency: string,
    toCurrency: string
  ) => {
    let newExchangeRate;
    if (fromCurrency === toCurrency) {
      return 1;
    }
    try {
      const { data } = (await axios.get(
        `${API_BASE_URL}/${date}?base=${fromCurrency}&symbols=${toCurrency}`
      )) as ExchangeRatesData;
      newExchangeRate = Number(data?.rates[toCurrency]);
    } catch (e) {
      setError(true);
    }
    return newExchangeRate || 0;
  };
  return { getNewExchangeRate, newExchangeRateError: error };
};
