import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField'
import BorderColorIcon from '@material-ui/icons/BorderColor';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import CreateIcon from '@material-ui/icons/Create';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

function makeaActive(e) {
    document.getElementById('pos_field').disabled = false
    console.log(document.getElementById('pos_field'))
    e.preventDefault();
  }

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
                <div className="row">
                    <form className={classes.root} noValidate autoComplete="off">
                        <TextField id="standard-basic pos_field" label="PoS" disabled={true}/>
                    </form>
                    <IconButton aria-label="create" className={classes.margin} size="medium">
                        <CreateIcon fontSize="inherit" />
                    </IconButton>
                </div>
            </div>
            <div className="col-md-3 col-sm-3 col-lg-3">
            </div>
        </div>
    );
  }
