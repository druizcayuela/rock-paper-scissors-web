import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(({ spacing, palette }) => ({
  root: {
    minWidth: 100,
    padding: 0,
  },
  tag: {
    borderRadius: '0 3px 3px 0',
    background: '#FFFFFF',
    borderLeft: `3px solid #fafafa`,
    fontWeight: 'bold',
    padding: '8px 16px',
    marginTop: '40px',
  },
}));

const Counter = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button className={classes.tag}>Total rounds played </Button>
    </div>
  );
};


export default Counter;