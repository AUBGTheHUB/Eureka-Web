import React from 'react';
import { DropdownButton, DropdownItem } from 'react-bootstrap';
import { Dropdown } from 'react-bootstrap';
import Paper from '@material-ui/core/Paper';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import axios from 'axios'
import config from '../constants'

const baseUrl = config.url.API_URL;
axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';


class WordInfoComponent extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            "dimensions":{},
            "show":false,
            "root_lemma":"",
            "word": props.word,
            "proposed_dimension":"Choose a dimension",
            "chosen_feature":"Choose a feature",
            "new_dimension":false,
            "not_included_dimensions":{"Aktionsart": [["Accomplishment", false], ["Achievement", false], ["Activity", false]], "Comparison": [["Absolute", false], ["comparative", false]]}
            }
    }
    componentDidMount(){
        axios.get(`${baseUrl}/words/${this.state.word}/`).then(response => response.data)
        .then(word => {
            this.setState({ "dimensions": word.dimensions, "root_lemma": word.lemma.name})
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

      handleCloseSubmit(){
        this.setState({"show":false})
        var not_included_dimensions = this.state.not_included_dimensions;

        var current_dimensions = this.state.dimensions;

        current_dimensions[this.state.proposed_dimension]= not_included_dimensions[this.state.proposed_dimension];
        
        delete not_included_dimensions[this.state.proposed_dimension]

        this.setState({"dimensions":current_dimensions, "not_included_dimensions":not_included_dimensions, "proposed_dimension":"Choose a dimension", 
        "chosen_feature":"Choose a feature", "new_dimension":false});
      };
    
      propose_dimension(proposed_value){
        this.setState({"proposed_dimension":proposed_value, "new_dimension":true})
    };
    choose_new_feature(proposed_feature){
        function check_feature(feat, value) {
            return feat[0]==this.value;
          }
        
        this.setState({"chosen_feature":proposed_feature[0]});

        var current_not_included_dimensions = this.state.not_included_dimensions;

        var idx_change = current_not_included_dimensions[this.state.proposed_dimension].findIndex(check_feature, {"value":proposed_feature[0]})

        current_not_included_dimensions[this.state.proposed_dimension][idx_change][1] = true;
        
        this.setState({"not_included_dimensions":current_not_included_dimensions})
    }


    render(){
        var keys = Object.keys(this.state.dimensions);
        var active_items = [];
        var all_items = [];

        keys.forEach(element => {
            var key_items = []
            this.state.dimensions[element].forEach(item => {
                if(!key_items.includes(item[0])){
                    key_items.push(item[0])
                }
            });
            all_items.push(key_items);
            active_items.push(this.state.dimensions[element].filter(feature => feature[1] == true)[0][0])
        });
        
        var not_included_keys = Object.keys(this.state.not_included_dimensions);
        
        var not_included_features = [];
        if(this.state.new_dimension == true){
            var dimension_features = this.state.not_included_dimensions[this.state.proposed_dimension]
            
            dimension_features.forEach(function(entry) {
                not_included_features.push(entry)
            });
        }
        

        let new_dimension_features;

        if (this.state.new_dimension){

            new_dimension_features = 

            <div className="row">
                <div className="col-md-4 col-lg-4 col-sm-4">
                </div>

                <div className="col-md-4 col-lg-4 col-sm-4">
                    <DropdownButton variant="outline-secondary" id="dropdown-basic-button" title={this.state.chosen_feature}>
                            {not_included_features.map((value, index) => {return(
                                <DropdownItem onClick={() => this.choose_new_feature(value)}>
                                    {value}
                                </DropdownItem>
                        )})}
                    </DropdownButton>
                </div>

                <div className="col-md-4 col-lg-4 col-sm-4">
                </div>
            </div>
        }
        else{
            new_dimension_features = <div></div>
        }

        return(
            <div className="">
                <div className="row">
                    <div className="col-md-4 col-sm-4 col-lg-4"></div>
                    
                    <div className="col-md-4 col-sm-4 col-lg-4">
                        <h2>word: {this.state.word}</h2>
                        <p>root lemma: {this.state.root_lemma}</p>
                    </div>

                    <div className="col-md-4 col-sm-4 col-lg-4"></div>
                </div>

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

                <div className="row margin_top">
                    <div className="col-md-4 col-sm-4 col-lg-4"></div>
                    <div className="col-md-4 col-sm-4 col-lg-4"><p className="centered_text">Propose a new annotation</p></div>
                    <div className="col-md-4 col-sm-4 col-lg-4"></div>
                </div>   
                
                <div className="row">
                    <div className="col-md-4 col-sm-4 col-lg-4"></div>
                        <div className="col-md-4 col-sm-4 col-lg-4">
                            <DropdownButton variant="outline-secondary" id="dropdown-basic-button" title={this.state.proposed_dimension}>
                            {not_included_keys.map((value, index) => {return(
                                <DropdownItem onClick={() => this.propose_dimension(value)}>
                                    {value}
                                </DropdownItem>
                        )})}
                            </DropdownButton>
                        </div>
                    <div className="col-md-4 col-sm-4 col-ld-4"></div>
                </div>

                {new_dimension_features}
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

export default WordInfoComponent;

