import React, { ChangeEvent } from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';

interface CurrencySelectProps {
  value: string;
  onChangeCurrency: (event: React.ChangeEvent<{ value: unknown }>) => void;
  label: string;
  currencyOptions: string[];
}

export const CurrencySelect: React.FC<CurrencySelectProps> = ({
  value,
  onChangeCurrency,
  label,
  currencyOptions,
}) => (
  <FormControl variant='outlined'>
    <InputLabel id='currency-select'>{label}</InputLabel>
    <Select
      labelId='currency-select'
      id='currency-select'
      value={value}
      onChange={onChangeCurrency}
      name='from'
      label={label}
    >
      {currencyOptions.map((option) => (
        <MenuItem key={option} value={option}>
          {option}
        </MenuItem>
      ))}
    </Select>
  </FormControl>
);
