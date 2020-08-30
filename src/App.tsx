import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core';

import { Converter } from './components';

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Converter />
    </div>
  );
};

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      margin: 0,
      padding: 0,
      width: '100%',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  })
);

export default App;
