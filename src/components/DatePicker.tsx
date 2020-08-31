import React from 'react';
import { TextField, makeStyles, createStyles } from '@material-ui/core';

interface DatePickerProps {
  date: string;
  todayDate: string;
  onChangeDate: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const DatePicker: React.FC<DatePickerProps> = ({
  date,
  todayDate,
  onChangeDate,
}) => {
  const classes = useStyles();
  return (
    <form noValidate className={classes.datePicker}>
      <TextField
        id='date'
        label='Choose Date'
        type='date'
        defaultValue={date}
        onChange={onChangeDate}
        InputLabelProps={{
          shrink: true,
        }}
        InputProps={{
          inputProps: {
            min: '2000-01-01',
            max: todayDate,
          },
        }}
      />
    </form>
  );
};
const useStyles = makeStyles((theme) =>
  createStyles({
    datePicker: {
      position: 'absolute',
      top: 10,
      left: 10,
      [theme.breakpoints.up('sm')]: {
        top: 20,
        left: 20,
      },
    },
  })
);
