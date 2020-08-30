import React, { useEffect, useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';

import { useGetExchangeRate, useExchangeRatesData } from '../../hooks';
import { ConverterView } from './ConverterView';
import { Error } from '../../components';
import { Conversion } from '../../actions/types';
import { addConversion } from '../../actions';
import currencySymbols from '../../currencySymbols.json';

const mapDispatchToProps = (dispatch: any) => ({
  onAddConversion: (conversion: Omit<Conversion, 'id'>) => {
    dispatch(addConversion(conversion));
  },
});

const connector = connect(null, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

const ConverterContainer: React.FC<PropsFromRedux> = ({ onAddConversion }) => {
  const [fromCurrency, setFromCurrency] = useState<string>('');
  const [toCurrency, setToCurrency] = useState<string>('');
  const [currencyOptions, setCurrencyOptions] = useState<string[]>([]);
  const [amount, setAmount] = useState<number>(1);
  const [exchangeRate, setExchangeRate] = useState<number>(0);
  const [result, setResult] = useState<number | null>(null);
  const [isFromCurrency, setIsFromCurrency] = useState<boolean>(true);
  const symbols = currencySymbols as { [key: string]: string };

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
    setAmount(result || 0);
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

  useEffect(() => {
    if (result === null) {
      return;
    }

    onAddConversion({
      from: `${amount} ${fromCurrency}`,
      to: `${result} ${toCurrency}`,
      convertedAt: `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [result]);

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
      exchangeRate={exchangeRate}
      currencySymbol={toCurrency ? symbols[toCurrency] : ''}
      onChangeAmount={handleChangeAmount}
      onChangeFromCurrency={handleChangeFromCurrency}
      onChangeToCurrency={handleChangeToCurrency}
      onClickSwitch={handleClickSwitch}
    />
  );
};

export const Converter = connect(null, mapDispatchToProps)(ConverterContainer);
