import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField'

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));


export default function BasicTextFields() {
    const classes = useStyles();
  
    return (
        
        <div className="row pos_component">
            <div className="col-md-3 col-sm-3 col-lg-3">
            </div>
            <div className="col-md-3 col-sm-3 col-lg-3">
                <div className="pos_text">Part of Speech :</div>
            </div>
            <div className="col-md-3 col-sm-3 col-lg-3">
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                </form>
            </div>
            <div className="col-md-3 col-sm-3 col-lg-3">
            </div>
        </div>
    );
  }
