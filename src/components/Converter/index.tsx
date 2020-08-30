import React, { useEffect, useState } from 'react';

import { useGetExchangeRate, useExchangeRatesData } from '../../hooks';
import { ConverterView } from './ConverterView';
import { Error } from '../../components';

export const Converter = () => {
  const [fromCurrency, setFromCurrency] = useState<string>('');
  const [toCurrency, setToCurrency] = useState<string>('');
  const [currencyOptions, setCurrencyOptions] = useState<string[]>([]);
  const [amount, setAmount] = useState<number>(1);
  const [exchangeRate, setExchangeRate] = useState<number>(1);
  const [result, setResult] = useState<number>(0);
  const [isFromCurrency, setIsFromCurrency] = useState<boolean>(true);

  const {
    getExchangeRatesData,
    exchangeRatesDataError,
  } = useExchangeRatesData();
  const { getNewExchangeRate, newExchangeRateError } = useGetExchangeRate();

  useEffect(() => {
    (async () => {
      const data = await getExchangeRatesData();
      if (!data) {
        return;
      }
      const { currencies, baseCurrency, initialRate } = data;
      setCurrencyOptions([baseCurrency, ...currencies]);
      setFromCurrency(baseCurrency);
      setToCurrency(currencies[0]);
      setExchangeRate(initialRate);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChangeFromCurrency = async (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    const newFromCurrency = event.target.value as string;
    setFromCurrency(newFromCurrency);
    setIsFromCurrency(true);
    const newExchangeRate = await getNewExchangeRate(
      newFromCurrency,
      toCurrency
    );
    setExchangeRate(newExchangeRate);
  };

  const handleChangeToCurrency = async (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    const newToCurrency = event.target.value as string;
    setToCurrency(newToCurrency);
    setIsFromCurrency(true);
    const newExchangeRate = await getNewExchangeRate(
      fromCurrency,
      newToCurrency
    );
    setExchangeRate(newExchangeRate);
  };

  const handleChangeAmount = (event: React.ChangeEvent<{ value: unknown }>) => {
    setAmount(event.target.value as number);
  };

  const countResult = () => {
    if (isFromCurrency) {
      return setResult(amount * exchangeRate);
    }
    return setResult(amount / exchangeRate);
  };

  const handleClickSwitch = () => {
    setAmount(result);
    setIsFromCurrency(!isFromCurrency);
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  useEffect(() => {
    if (!exchangeRate) {
      return;
    }
    countResult();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFromCurrency, amount, exchangeRate]);

  if (exchangeRatesDataError || newExchangeRateError) {
    return <Error />;
  }

  return (
    <ConverterView
      result={result}
      amount={amount}
      fromCurrency={fromCurrency}
      toCurrency={toCurrency}
      currencyOptions={currencyOptions}
      onChangeAmount={handleChangeAmount}
      onChangeFromCurrency={handleChangeFromCurrency}
      onChangeToCurrency={handleChangeToCurrency}
      onClickSwitch={handleClickSwitch}
    />
  );
};
