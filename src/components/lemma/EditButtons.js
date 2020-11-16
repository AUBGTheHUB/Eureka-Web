import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import React, { useState, useEffect } from 'react';

const EditButtons = (props) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const user = window.localStorage.getItem("user");
        setUser(JSON.parse(user));
    }, []);

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
    	comp_to_render = <div className='edit-div'><Button className="lemma-button" onClick={toggleEditable} variant="contained" disabled={user === null}>Edit Data</Button></div>;

	return(comp_to_render);
}

export default EditButtons;