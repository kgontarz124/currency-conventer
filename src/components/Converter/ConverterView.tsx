import React from 'react';
import { SwapHoriz as SwitchIcon } from '@material-ui/icons';

import {
  TextField,
  makeStyles,
  createStyles,
  Typography,
  IconButton,
} from '@material-ui/core';
import { CurrencySelect } from '../../components';

interface ConverterViewProps {
  result: number;
  amount: number;
  fromCurrency: string;
  toCurrency: string;
  currencyOptions: string[];
  onChangeAmount: (event: React.ChangeEvent<{ value: unknown }>) => void;
  onChangeFromCurrency: (event: React.ChangeEvent<{ value: unknown }>) => void;
  onChangeToCurrency: (event: React.ChangeEvent<{ value: unknown }>) => void;
  onClickSwitch: () => void;
}

export const ConverterView: React.FC<ConverterViewProps> = ({
  result,
  amount,
  fromCurrency,
  toCurrency,
  currencyOptions,
  onChangeAmount,
  onChangeFromCurrency,
  onChangeToCurrency,
  onClickSwitch,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.converter}>
      <Typography variant='subtitle1' component='span'>
        Exchange Rate
      </Typography>
      <Typography variant='h3' component='h1'>
        {result}
      </Typography>

      <TextField
        id='outlined-number'
        label='Amount'
        type='number'
        InputLabelProps={{
          shrink: true,
        }}
        variant='outlined'
        className={classes.textFiled}
        value={amount}
        onChange={onChangeAmount}
      />
      <div className={classes.selectRow}>
        <CurrencySelect
          value={fromCurrency}
          onChangeCurrency={onChangeFromCurrency}
          label='From'
          currencyOptions={currencyOptions}
        />
        <IconButton color='secondary' onClick={onClickSwitch}>
          <SwitchIcon />
        </IconButton>

        <CurrencySelect
          value={toCurrency}
          onChangeCurrency={onChangeToCurrency}
          label='To'
          currencyOptions={currencyOptions}
        />
      </div>
    </div>
  );
};

const useStyles = makeStyles(() =>
  createStyles({
    converter: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: 260,
      height: 260,
    },
    selectRow: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
    },
    textFiled: {
      width: '100%',
      margin: '30px 0 10px',
    },
  })
);
