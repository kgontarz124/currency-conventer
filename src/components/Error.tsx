import React from 'react';
import { Typography, createStyles, makeStyles } from '@material-ui/core';
import { Error as ErrorIcon } from '@material-ui/icons';

export const Error = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ErrorIcon color='error' className={classes.icon} />
      <Typography variant='h5' component='h1'>
        Ups! Something went wrong :(
      </Typography>
    </div>
  );
};

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      margin: '0 20px',
    },
    icon: {
      marginRight: 10,
    },
  })
);
