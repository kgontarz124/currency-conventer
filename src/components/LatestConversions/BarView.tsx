import React from 'react';
import { Typography, Toolbar, Button } from '@material-ui/core';
import { PropsFromRedux } from '.';

type ListViewProps = Omit<PropsFromRedux, 'conversions' | 'onDeleteConversion'>;

export const BarView: React.FC<ListViewProps> = ({
  onDeleteAllConversions,
}) => (
  <Toolbar>
    <Typography variant='h6' component='h2'>
      Latest conversions
    </Typography>
    <Button
      variant='contained'
      color='secondary'
      onClick={onDeleteAllConversions}
    >
      Delete all
    </Button>
  </Toolbar>
);
