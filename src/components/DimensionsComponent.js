import React from 'react';
import { DropdownButton } from 'react-bootstrap';
import { Dropdown } from 'react-bootstrap';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import CreateIcon from '@material-ui/icons/Create';
import Input from '@material-ui/core/Input';

class DimensionsComponent extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            "dimensions":{"tense":[["feature 1", true], ["feature 2", false]], "person":[["feature 1", false], ["feature 2", true]], "dimension 1":[["feature 1", true], ["feature 2", false]],
                            "dimension 2":[["feature 1", true], ["feature 2", false]], "dimension 3":[["feature 1", true], ["feature 2", false]], 
                            "dimension 4":[["feature 1", true], ["feature 2", false]]},
            "pos":"VBG"
            }
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
        console.log()
    }

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
                            <div className="row dimension">
                                <div className="col-md-6 col-sm-6 col-lg-6">
                                    <div className="centered_text"><Paper variant="outlined" square/>PoS</div>
                                </div>
                                <div className="col-md-6 col-sm-6 col-lg-6">
                                    <div className="row">
                                        <Input defaultValue={this.state.pos} id="pos_input" disabled inputProps={{ 'aria-label': 'description' }} />
                                        <IconButton aria-label="create" size="medium">
                                            <CreateIcon fontSize="inherit" />
                                        </IconButton>
                                    </div>
                                </div>
                            </div>
                            {keys.map((value, index) => {
                                return(
                                        <div className="row dimension">
                                            <div className="col-md-6 col-sm-6 col-lg-6"><div className="centered_text"><Paper variant="outlined" square/>{value}</div></div>
                                            <div className="col-md-6 col-sm-6 col-lg-6">
                                            <Paper variant="outlined" square/>
                                                <DropdownButton variant="outline-secondary" id="dropdown-basic-button" title={active_items[index]}>
                                                    {all_items[index].map((item_value, item_index) => 
                                                        {return (<Dropdown.Item onClick={() => this.change_feature(item_value, value)}>{item_value}</Dropdown.Item>)}
                                                    )}
                                                </DropdownButton>
                                            </div>
                                        </div>
                                    )
                            })}
                        </div>
                    <div className="col-md-4 col-sm-4 col-lg-4"></div>
                </div>
            </div>);
    }
}

export default DimensionsComponent;

