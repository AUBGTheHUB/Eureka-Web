import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import axios from 'axios';
import config from '../constants';
import { Divider } from '@material-ui/core';
import dimensionService from '../services/dimension';



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

const SubmitDimensionDialog = (props) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [dimensions, setDimensions] = useState([]);
  const [dimension, setDimension] = useState('');

  useEffect(() => {
      const fetchDimensions = async () => {
          const data = await dimensionService.getAll();
          setDimensions(data);
      }
      fetchDimensions();
  }, [])

  const handleChange = (event) => {
    setDimension(event.target.value || '');
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    setOpen(false);
    props.handleSubmit(dimension);
  };

  return (
    <div>
      <div style={{marginTop: 15, marginBottom:15}}>
        <Button onClick={handleClickOpen} variant="contained" startIcon={<CloudUploadIcon />}>Propose dimension</Button>
      </div>
      <Dialog disableBackdropClick disableEscapeKeyDown open={open} onClose={handleClose}>
        <DialogTitle>Add new dimension to the table</DialogTitle>
        <DialogContent>
          <form className={classes.container}>
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-dialog-select-label">New Dimension</InputLabel>
              <Select
                labelId="demo-dialog-select-label"
                id="demo-dialog-select"
                value={dimension}
                onChange={handleChange}
                input={<Input />}
              >
                {dimensions.map(dim => <MenuItem key={dim} value={dim}>{dim}</MenuItem>)}
              </Select>
            </FormControl>
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

export default SubmitDimensionDialog;