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
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import config from '../constants';
import { Divider } from '@material-ui/core';

const baseUrl = config.url.API_URL;
axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';

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

const SubmitWordDialog = (props) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [word, setWord] = useState({
    name: '',
    date_updated: Date.now(),
    language: props.language,
    tagset: '',
    lemma: '',
    author: ''
  });
  const [tagsets, setTagsets] = useState([]);

  useEffect(() => {
      const fetchTagsets = async () => {
          const { data, error } = await axios.get(`${baseUrl}/tagsets/`);
          setTagsets(tagsets.concat(data.results.map(tag => tag.name)));
      }
      fetchTagsets();
  }, [])

  const handleChange = (event) => {
    setWord({
      ...word,
      tagset: event.target.value
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
    props.handleSubmit(word);
  };

  return (
    <div>
      <div style={{marginTop: 15, marginBottom:15}}>
        <Button onClick={handleClickOpen} variant="contained" startIcon={<CloudUploadIcon />}>Propose word</Button>
      </div>
      <Dialog disableBackdropClick disableEscapeKeyDown open={open} onClose={handleClose}>
        <DialogTitle>Add new word</DialogTitle>
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
                margin="dense"
                id="name"
                label="Lemma"
                type="text"
                fullWidth
              />
              <TextField
                autoFocus
                id="name"
                label="Author"
                margin="dense"
                fullWidth
              />
            <div>
              <FormControl className={classes.formControl} fullWidth margin="dense">
                <InputLabel id="demo-dialog-select-label">Tagset</InputLabel>
                <Select
                  labelId="demo-dialog-select-label"
                  id="demo-dialog-select"
                  value={word ? word.tagset : ''}
                  onChange={handleChange}
                  input={<Input />}
                >
                  {tagsets.map(tag => <MenuItem key={tag} value={tag}>{tag}</MenuItem>)}
                </Select>
              </FormControl>
            </div>
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

export default SubmitWordDialog;