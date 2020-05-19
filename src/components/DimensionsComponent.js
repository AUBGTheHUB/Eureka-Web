import React from 'react';
import { DropdownButton } from 'react-bootstrap';
import { Dropdown } from 'react-bootstrap';
import Paper from '@material-ui/core/Paper';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import utils from '../services/utilities'
import axios from 'axios'
import config from '../constants'

const baseUrl = config.url.API_URL
//random id to display different word at each refresh
const randomId = Math.floor((Math.random()*10) + 1);
axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';

class DimensionsComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            "dimensions": {},
            "pos":"VBG",
            "show":false
            }
    }

    componentDidMount(){
        axios.get(`${baseUrl}/4/`).then(response => response.data)
        .then(word => {
            let formattedWord = utils.formatWord(word)
            console.log(formattedWord)
            this.setState({ "dimensions": formattedWord.dimensions})
        })
    }

    change_feature(feature_value, dimension_value){
        var current_dimensions = this.state.dimensions;

        current_dimensions[dimension_value].forEach(change_value);

        function change_value(item, index){
            if(item[0] != feature_value){
                current_dimensions[dimension_value][index][1] = false;
            }
            else{
                current_dimensions[dimension_value][index][1] = true;
            }
        }
        this.setState({"dimensions":current_dimensions});
    }

    edit_pos(е){
        document.getElementById('pos_input')
    }

    handleClickOpen(){
        this.setState({"show":true})
      };
    
    handleClose(){
        this.setState({"show":false})
      };

    render(){
        var keys = Object.keys(this.state.dimensions);
        var active_items = [];
        var all_items = [];

        keys.forEach(element => {
            var key_items = []
            this.state.dimensions[element].forEach(item => {
                key_items.push(item[0])
            });
            all_items.push(key_items);
            active_items.push(this.state.dimensions[element].filter(feature => feature[1] == true)[0][0])
        });
        
        return(
            <div className="">
                <div className="row">
                    <div className="col-md-4 col-sm-4 col-lg-4"></div>
                        <div className="col-sm-4 col-md-4 col-lg-4">
                            
                            {keys.map((value, index) => {
                                return(
                                        <div key={index} className="row dimension">
                                            <div className="col-md-6 col-sm-6 col-lg-6"><div className="centered_text"><Paper variant="outlined" square/>{value}</div></div>
                                            <div className="col-md-6 col-sm-6 col-lg-6">
                                            <Paper variant="outlined" square/>
                                                <DropdownButton variant="outline-secondary" id="dropdown-basic-button" title={active_items[index]}>
                                                    {all_items[index].map((item_value, item_index) => 
                                                        {return (<Dropdown.Item key={item_index} onClick={() => this.change_feature(item_value, value)}>{item_value}</Dropdown.Item>)}
                                                    )}
                                                </DropdownButton>
                                            </div>
                                        </div>
                                    )
                            })}
                        </div>
                    <div className="col-md-4 col-sm-4 col-lg-4"></div>
                </div>
                <div className="row submit_button_1">
                    <div className="col-md-4 col-sm-4 col-lg-4"></div>

                    <div className="col-md-4 col-sm-4 col-lg-4">
                            <Button variant="contained" color="primary" onClick={() => this.handleClickOpen()}>
                                Save changes
                            </Button>

                            <Dialog
                                open={this.state.show}
                                onClose={this.handleClose}
                                aria-labelledby="alert-dialog-title"
                                aria-describedby="alert-dialog-description"
                            >
                                <DialogTitle id="alert-dialog-title">{"Did you add all changes?"}</DialogTitle>
                                <DialogContent>
                                    <DialogContentText id="alert-dialog-description">
                                        Your changes will be submitted for review and added to the database when the language admin 
                                        approves them.
                                    </DialogContentText>
                                </DialogContent>
                                <DialogActions>
                                <Button onClick={() => this.handleClose()} color="primary">
                                    Continue editing
                                </Button>
                                <Button onClick={() => this.handleClose()} color="primary" autoFocus>
                                    Submit
                                </Button>
                                </DialogActions>
                            </Dialog>
                        </div>
                    </div>

                    <div className="col-md-4 col-sm-4 col-lg-4"></div>
                </div>

                
            );
    }
}

export default DimensionsComponent;

