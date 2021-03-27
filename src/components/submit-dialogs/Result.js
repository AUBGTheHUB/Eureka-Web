import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import React from 'react';

export default function ResultDialog(props) {
    return (
        <Dialog aria-labelledby="customized-dialog-title" onClose={() => props.handleClose()} open={props.showDialog}>
            <DialogTitle id="customized-dialog-title">
                {props.title}
            </DialogTitle>
            <DialogContent>
                    <Typography>
                        {props.text}
                    </Typography>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => props.handleClose()} color="primary">OK</Button>
            </DialogActions>
        </Dialog>
    );
}