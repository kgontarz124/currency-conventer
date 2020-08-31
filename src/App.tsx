import React, { useState } from 'react';
import { makeStyles, createStyles } from '@material-ui/core';

import { Converter, LatestConversions, DatePicker } from './components';

const App = () => {
  var today = new Date();
  var isoDateTime = new Date(
    today.getTime() - today.getTimezoneOffset() * 60000
  ).toISOString();
  const todayDate = isoDateTime.slice(0, 10);
  const [date, setDate] = useState(todayDate);
  const classes = useStyles();
  const handleChangeDate = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDate(event.target.value);
  };
  return (
    <div className={classes.root}>
      <div className={classes.line} />
      <DatePicker
        date={date}
        onChangeDate={handleChangeDate}
        todayDate={todayDate}
      />
      <Converter date={date} />
      <LatestConversions />
    </div>
  );
};

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      margin: 0,
      padding: 0,
      width: '100%',
      height: '100vh',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'column',
      position: 'relative',
    },
    line: {
      width: '100%',
      height: 5,
      background: theme.palette.primary.main,
    },
  })
);

export default App;
