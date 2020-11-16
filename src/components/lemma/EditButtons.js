import IconButton from '@material-ui/core/IconButton';
import CreateIcon from '@material-ui/icons/Create';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import React from 'react';
import { useState, useEffect } from 'react';

const EditButtons = (props) => {

    const handleOpen = () => {
        props.setShowDialog(true);
      };

	function toggleEditable(e) {
        props.setEditable(!props.editable);
    }

    let comp_to_render = '';

    if(props.editable)
    	comp_to_render = <div className='edit-div'><Button className="lemma-button" variant="contained" onClick={handleOpen} startIcon={<CloudUploadIcon />}>Submit changes</Button><Button className="lemma-button" onClick={toggleEditable} variant='contained' >Cancel</Button></div>;
    else
    	comp_to_render = <div className='edit-div'><Button className="lemma-button" onClick={toggleEditable} variant="contained" >Edit Data</Button></div>;

	return(comp_to_render);
}

export default EditButtons;