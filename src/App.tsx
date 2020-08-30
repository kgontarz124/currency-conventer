import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core';

import { Converter, LatestConversions } from './components';

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.line} />
      <Converter />
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
    },
    line: {
      width: '100%',
      height: 5,
      background: theme.palette.primary.main,
    },
  })
);

export default App;
