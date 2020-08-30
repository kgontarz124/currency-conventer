import React from 'react';
import { connect, ConnectedProps } from 'react-redux';

import { ListView } from './ListView';
import { deleteAllConversions, deleteConversion } from '../../actions';
import { State } from '../../reducers';
import { BarView } from './BarView';
import { makeStyles, createStyles } from '@material-ui/core';

const mapStateToProps = ({ conversions }: State) => ({ conversions });

const mapDispatchToProps = (dispatch: any) => {
  return {
    onDeleteAllConversions: () => {
      dispatch(deleteAllConversions());
    },
    onDeleteConversion: (id: number) => {
      dispatch(deleteConversion(id));
    },
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);
export type PropsFromRedux = ConnectedProps<typeof connector>;

const LatestConversionsContainer: React.FC<PropsFromRedux> = ({
  conversions,
  onDeleteAllConversions,
  onDeleteConversion,
}) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <BarView onDeleteAllConversions={onDeleteAllConversions} />
      <ListView
        conversions={conversions}
        onDeleteConversion={onDeleteConversion}
      />
    </div>
  );
};

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      width: '100%',
      height: '45vh',
    },
  })
);

export const LatestConversions = connect(
  mapStateToProps,
  mapDispatchToProps
)(LatestConversionsContainer);
