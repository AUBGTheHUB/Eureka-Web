import React from 'react';
import TextField from '@material-ui/core/TextField'
import IconButton from '@material-ui/core/IconButton';
import CreateIcon from '@material-ui/icons/Create';
import Paper from '@material-ui/core/Paper';


  class PoSComponent extends React.Component {
    constructor(props) {
      super(props)
    }

    makeaActive(e) {
      var current_property_enabled= document.getElementById('outlined-basic').disabled

      document.getElementById('outlined-basic').disabled = !current_property_enabled

      e.preventDefault();
    }
    
    
    render(){
      return (
        
        <div className="row pos_component">
            <div className="col-md-3 col-sm-3 col-lg-3">
            </div>
            <div className="col-md-3 col-sm-3 col-lg-3">
                <div className="pos_text">Part of Speech :</div>
            </div>
            <div className="col-md-3 col-sm-3 col-lg-3">
                <div className="row">
                    <form noValidate autoComplete="off">
                        <TextField id="outlined-basic" label="PoS" disabled={true} defaultValue="VBG" variant="outlined"/>
                    </form>
                    <IconButton aria-label="create" size="medium" onClick={this.makeaActive}>
                        <CreateIcon fontSize="inherit" />
                    </IconButton>
                </div>
            </div>
            <div className="col-md-3 col-sm-3 col-lg-3">
            </div>
        </div>
    );
    }
  }

export default PoSComponent;