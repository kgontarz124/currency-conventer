import React from 'react';
import {
  List,
  ListItem,
  ListItemText,
  makeStyles,
  createStyles,
  Typography,
  ListItemSecondaryAction,
  IconButton,
} from '@material-ui/core';
import { PropsFromRedux } from '.';
import { Conversion } from '../../actions/types';
import {
  ArrowRightAlt as ArrowRightAltIcon,
  Delete as DeleteIcon,
} from '@material-ui/icons';

type ListViewProps = Omit<PropsFromRedux, 'onDeleteAllConversions'>;

export const ListView: React.FC<ListViewProps> = ({
  conversions,
  onDeleteConversion,
}) => {
  const classes = useStyles();

  if (conversions.length < 1) {
    return (
      <div className={classes.noDataTextContainer}>
        <Typography variant='subtitle1' component='span'>
          There are not any conversions
        </Typography>
      </div>
    );
  }

  return (
    <List className={classes.list}>
      {conversions.map(({ id, from, to, convertedAt, date }: Conversion) => {
        const labelId = `checkbox-list-label-${id}`;
        const onDelete = () => onDeleteConversion(id);

        return (
          <ListItem key={id} role={undefined} dense button>
            <div className={classes.conversionInfoContainer}>
              <ListItemText
                id={labelId}
                primary={
                  <>
                    <Typography variant='subtitle1' component='span'>
                      Created At:
                    </Typography>
                    &nbsp;{convertedAt}
                  </>
                }
              />
              <ListItemText
                id={labelId}
                primary={
                  <>
                    <Typography variant='subtitle1' component='span'>
                      For Date:
                    </Typography>
                    &nbsp;{date}
                  </>
                }
              />
              <ListItemText
                id={labelId}
                primary={
                  <div className={classes.conversionInfo}>
                    {from}
                    <ArrowRightAltIcon color='primary' />
                    {to}
                  </div>
                }
              />
            </div>

            <ListItemSecondaryAction>
              <IconButton edge='end' aria-label='delete' onClick={onDelete}>
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        );
      })}
    </List>
  );
};

const useStyles = makeStyles((theme) =>
  createStyles({
    list: {
      width: '100%',
      height: '35vh',
      overflowY: 'scroll',
    },
    conversionInfoContainer: {
      [theme.breakpoints.up('lg')]: {
        display: 'flex',
        flex: 1,
      },
    },
    conversionInfo: {
      display: 'flex',
      alignItems: 'center',
    },
    noDataTextContainer: {
      padding: '16px 0 0 16px',
    },
  })
);
