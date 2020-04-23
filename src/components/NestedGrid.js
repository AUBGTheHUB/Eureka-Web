import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    flexGrow: 1
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function NestedGrid() {
  const classes = useStyles();

  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={4}>
          <Card className={classes.root}>
            <CardContent>
              <div className="text-center">
                <Button size="small">
                  dachshund
                </Button>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
        <Card className={classes.root}>
            <CardContent>
              <div className="text-center">
                <Button size="small">
                  dachshund
                </Button>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
        <Card className={classes.root}>
            <CardContent>
              <div className="text-center">
                <Button size="small">
                  dachshund
                </Button>
              </div>
            </CardContent>
          </Card>
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
      </Grid>
    </div>
  );
}
