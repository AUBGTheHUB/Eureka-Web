import { Checkbox } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import React, { useState } from 'react';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200,
  },
}));

const SubmitLemmaDialog = (props) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [lemma, setLemma] = useState({
    name: '',
    language: props.language,
    transitivity: false,
    animacy: false,
    author: ''
  });

  const handleChange = (event) => {
    setLemma({
      ...lemma,
      [event.target.name]: event.target.checked
    });
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    setOpen(false);
    props.handleSubmit(lemma);
  };

  return (
    <div>
      <div style={{marginTop: 15, marginBottom:15}}>
        <Button onClick={handleClickOpen} variant="contained" startIcon={<CloudUploadIcon />}>Propose Lemma</Button>
      </div>
      <Dialog disableBackdropClick disableEscapeKeyDown open={open} onClose={handleClose}>
        <DialogTitle>Add new Lemma</DialogTitle>
        <DialogContent>
          <form className={classes.container}>
              <TextField             
                autoFocus
                margin="dense"
                id="name"
                label="Name"
                type="text"
                fullWidth/>
              <TextField
                autoFocus
                id="name"
                label="POS"
                margin="dense"
                fullWidth
              />
              <FormControlLabel
                control={
                <Checkbox
                  name="animacy"
                  checked={lemma.animacy}
                  onChange={handleChange}
                  name="animacy"
                  color="primary"
                  />
                }
                label="Animacy"
              />

              <FormControlLabel
                control={
                <Checkbox
                  name="animacy"
                  checked={lemma.transitivity}
                  onChange={handleChange}
                  name="transitivity"
                  color="primary"
                  />
                }
                label="Transitivity"
              />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default SubmitLemmaDialog;