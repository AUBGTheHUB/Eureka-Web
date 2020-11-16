import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = makeStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
}));

export default function SubmitDialog(props) {
  const classes = styles();

  const handleClickOpen = () => {
    props.setShowDialog(true);
  };
  const handleClose = () => {
    props.setShowDialog(false);
    //onSubmit();
  };
  const handleSubmit = () => {
    props.setShowDialog(false);
    props.onSubmit();
  };

  return (
    
    <div className="row">
            <Dialog aria-labelledby="customized-dialog-title" onClose={handleClose} open={props.showDialog}>
                <DialogTitle id="customized-dialog-title" >
                Edit request
                </DialogTitle>
                <DialogContent>
                  <form className={classes.container}>
                    <TextField             
                      autoFocus
                      margin="dense"
                      id="note"
                      label="Add note"
                      type="text"
                      fullWidth/>
                  </form>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose} color="primary">
                    Back
                  </Button>
                  <Button onClick={handleSubmit} color="primary">
                    Submit changes
                  </Button>
                </DialogActions>
            </Dialog>
    </div>
  );
}