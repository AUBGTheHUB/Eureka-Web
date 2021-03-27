import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import React, { useState } from 'react';

export default function SubmitDialog(props) {
  const [note, setNote] = useState('');
  const handleClose = () => {
    props.setShowDialog(false);
  };
  const handleSubmit = () => {
    props.setShowDialog(false);
    props.onSubmit(note);
  };

  return (
    <div className="row">
      <Dialog aria-labelledby="customized-dialog-title" onClose={handleClose} open={props.showDialog}>
          <DialogTitle id="customized-dialog-title" >
          Edit request
          </DialogTitle>
          <DialogContent>
            <form>
              <TextField             
                autoFocus
                margin="dense"
                id="note"
                label="Add note"
                type="text"
                value={note}
                onChange={(e) => setNote(e.target.value)}
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